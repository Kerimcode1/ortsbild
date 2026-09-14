/* ORTSBILD — Hero-Szene: ein Tal bei Nacht, in dem nach und nach die Fenster angehen. */
(function(){
  'use strict';

  function rnd(i){ var x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }

  function skyTexture(){
    var c = document.createElement('canvas');
    c.width = 8; c.height = 256;
    var g = c.getContext('2d');
    var grad = g.createLinearGradient(0, 0, 0, 256);
    grad.addColorStop(0.00, '#05080D');
    grad.addColorStop(0.42, '#0C1420');
    grad.addColorStop(0.74, '#1B2738');
    grad.addColorStop(0.90, '#3A3A42');
    grad.addColorStop(1.00, '#6B4C33');
    g.fillStyle = grad; g.fillRect(0, 0, 8, 256);
    var t = new THREE.CanvasTexture(c);
    t.magFilter = THREE.LinearFilter;
    return t;
  }

  function dotTexture(){
    var c = document.createElement('canvas');
    c.width = c.height = 32;
    var g = c.getContext('2d');
    var grad = g.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.4, 'rgba(255,255,255,.5)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grad; g.fillRect(0, 0, 32, 32);
    return new THREE.CanvasTexture(c);
  }

  /* Eine gezackte Bergkette als flache Silhouette. */
  function buildRidge(width, height, seed, color, z, opacity){
    var shape = new THREE.Shape();
    var half = width / 2, segs = 64, depth = 9;
    shape.moveTo(-half, -depth);
    shape.lineTo(-half, height * 0.3);
    for(var i = 0; i <= segs; i++){
      var t = i / segs;
      var x = -half + t * width;
      var y = height * (
        0.46 +
        0.30 * Math.sin(t * Math.PI * 2.1 + seed) +
        0.17 * Math.sin(t * Math.PI * 5.3 + seed * 2.3) +
        0.13 * (rnd(i + seed * 37) - 0.5) * 2
      );
      shape.lineTo(x, Math.max(y, height * 0.12));
    }
    shape.lineTo(half, -depth);
    shape.lineTo(-half, -depth);

    var mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color), transparent: opacity < 1, opacity: opacity, depthWrite: true
    });
    var mesh = new THREE.Mesh(new THREE.ShapeGeometry(shape), mat);
    mesh.position.z = z;
    return mesh;
  }

  function buildHouse(THREE, w, h, d, windows){
    var g = new THREE.Group();
    var body = new THREE.Mesh(
      new THREE.BoxGeometry(w, h, d),
      new THREE.MeshStandardMaterial({ color: 0x1A2432, roughness: .92, metalness: .03 })
    );
    body.position.y = h / 2;
    g.add(body);

    var roof = new THREE.Mesh(
      new THREE.ConeGeometry(w * 0.78, h * 0.62, 4),
      new THREE.MeshStandardMaterial({ color: 0x111A26, roughness: .95, metalness: .02 })
    );
    roof.position.y = h + h * 0.31;
    roof.rotation.y = Math.PI / 4;
    g.add(roof);

    var lit = [];
    var wGeo = new THREE.PlaneGeometry(w * 0.17, h * 0.2);
    for(var i = 0; i < windows; i++){
      var m = new THREE.MeshBasicMaterial({ color: 0x141C28 });
      var win = new THREE.Mesh(wGeo, m);
      var col = i % 2, row = Math.floor(i / 2);
      win.position.set((col ? 1 : -1) * w * 0.22, h * (0.34 + row * 0.33), d / 2 + 0.004);
      g.add(win);
      lit.push(m);
    }
    return { group: g, windows: lit };
  }

  window.initValley3D = function(){
    var canvas = document.getElementById('valleyCanvas');
    if(!canvas || canvas.dataset.inited === '1') return;
    if(typeof THREE === 'undefined') return;
    if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var renderer;
    try{
      renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: false });
    }catch(e){ return; }
    canvas.dataset.inited = '1';

    var host = canvas.parentElement;
    var W = host.clientWidth || 1200, H = host.clientHeight || 700;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(W, H, false);
    if('outputColorSpace' in renderer && THREE.SRGBColorSpace){ renderer.outputColorSpace = THREE.SRGBColorSpace; }
    else if('outputEncoding' in renderer && THREE.sRGBEncoding){ renderer.outputEncoding = THREE.sRGBEncoding; }
    if(THREE.ACESFilmicToneMapping){ renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.15; }

    var scene = new THREE.Scene();
    scene.background = skyTexture();
    scene.fog = new THREE.Fog(0x0C1420, 14, 46);

    var camera = new THREE.PerspectiveCamera(40, W / H, 0.1, 220);
    camera.position.set(0, 1.85, 10.5);
    camera.lookAt(0, 1.5, 0);

    var world = new THREE.Group();
    scene.add(world);

    /* Sterne */
    var starGeo = new THREE.BufferGeometry();
    var starPos = [];
    for(var s = 0; s < 420; s++){
      starPos.push((rnd(s * 3.1) - 0.5) * 80, 5 + rnd(s * 7.7) * 26, -30 - rnd(s * 5.5) * 40);
    }
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
    var stars = new THREE.Points(starGeo, new THREE.PointsMaterial({
      size: .34, map: dotTexture(), transparent: true, opacity: .75, depthWrite: false, sizeAttenuation: true
    }));
    world.add(stars);

    /* Bergketten, hinten nach vorne */
    world.add(buildRidge(120, 17, 1.7, 0x1B2635, -34, 1));
    world.add(buildRidge(96, 13.5, 4.2, 0x18222F, -24, 1));
    world.add(buildRidge(74, 10, 8.9, 0x141C28, -16, 1));
    world.add(buildRidge(58, 7.2, 13.4, 0x0F1622, -10, 1));

    /* Talboden */
    var ground = new THREE.Mesh(
      new THREE.PlaneGeometry(120, 70),
      new THREE.MeshStandardMaterial({ color: 0x0B121C, roughness: 1, metalness: 0 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    world.add(ground);

    /* Dorf */
    var village = new THREE.Group();
    village.position.set(0, 0, 0.5);
    world.add(village);

    var allWindows = [];
    var layout = [
      [-4.4, -2.2, .92], [-3.1, -1.0, 1.05], [-1.9, -2.6, .86], [-0.7, -0.6, 1.18],
      [ 0.6, -2.0, .95], [ 1.9, -0.9, 1.10], [ 3.0, -2.4, .88], [ 4.3, -1.2, 1.0],
      [-5.4, -4.0, .80], [-2.6, -4.4, .92], [ 0.2, -4.8, .84], [ 2.7, -4.2, .95],
      [ 5.2, -3.8, .82], [-4.0, -6.2, .76], [ 1.2, -6.6, .80], [ 4.0, -6.0, .74]
    ];
    for(var i = 0; i < layout.length; i++){
      var L = layout[i], sc = L[2];
      var h = buildHouse(THREE, 0.62 * sc, 0.58 * sc, 0.52 * sc, i % 3 === 0 ? 4 : 2);
      h.group.position.set(L[0], 0, L[1]);
      h.group.rotation.y = (rnd(i * 9.3) - 0.5) * 0.5;
      village.add(h.group);
      for(var w = 0; w < h.windows.length; w++){
        allWindows.push({ mat: h.windows[w], at: 0.35 + rnd(i * 4.1 + w * 2.7) * 3.4, on: 0 });
      }
    }

    /* Kirchturm als Ortsmittelpunkt */
    var tower = new THREE.Group();
    var tBody = new THREE.Mesh(
      new THREE.BoxGeometry(.42, 2.1, .42),
      new THREE.MeshStandardMaterial({ color: 0x1C2634, roughness: .9 })
    );
    tBody.position.y = 1.05;
    var tRoof = new THREE.Mesh(
      new THREE.ConeGeometry(.36, 1.0, 4),
      new THREE.MeshStandardMaterial({ color: 0x101825, roughness: .95 })
    );
    tRoof.position.y = 2.6; tRoof.rotation.y = Math.PI / 4;
    var clockMat = new THREE.MeshBasicMaterial({ color: 0x141C28 });
    var clock = new THREE.Mesh(new THREE.CircleGeometry(.11, 18), clockMat);
    clock.position.set(0, 1.72, .215);
    tower.add(tBody, tRoof, clock);
    tower.position.set(-0.1, 0, -3.4);
    village.add(tower);
    allWindows.push({ mat: clockMat, at: 2.2, on: 0 });

    /* Licht */
    scene.add(new THREE.AmbientLight(0x2A3A52, 1.5));
    var moon = new THREE.DirectionalLight(0x8FA8C8, 0.85);
    moon.position.set(-7, 11, 5);
    scene.add(moon);
    var warm = new THREE.PointLight(0xF0B45C, 0, 9, 2);
    warm.position.set(0, 1.0, -2);
    scene.add(warm);

    var litColor = new THREE.Color(0xF3BE73);
    var darkColor = new THREE.Color(0x141C28);

    var mx = 0, my = 0, tmx = 0, tmy = 0;
    function onMove(e){
      var r = host.getBoundingClientRect();
      tmx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      tmy = ((e.clientY - r.top) / r.height - 0.5) * 2;
    }
    host.addEventListener('mousemove', onMove);

    function onResize(){
      if(!canvas.isConnected) return;
      var w = host.clientWidth, h = host.clientHeight;
      if(!w || !h) return;
      camera.aspect = w / h; camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    }
    window.addEventListener('resize', onResize);

    var t0 = performance.now();
    function frame(now){
      if(!canvas.isConnected){
        host.removeEventListener('mousemove', onMove);
        window.removeEventListener('resize', onResize);
        renderer.dispose();
        return;
      }
      requestAnimationFrame(frame);
      var t = (now - t0) / 1000;

      /* Fenster gehen nach und nach an */
      var litCount = 0;
      for(var i = 0; i < allWindows.length; i++){
        var w = allWindows[i];
        if(t > w.at){
          w.on = Math.min(1, w.on + 0.028);
          var flick = 0.88 + 0.12 * Math.sin(t * 2.1 + i * 1.7);
          w.mat.color.copy(darkColor).lerp(litColor, w.on * flick);
          litCount += w.on;
        }
      }
      warm.intensity = (litCount / allWindows.length) * 1.5;

      mx += (tmx - mx) * 0.045;
      my += (tmy - my) * 0.045;

      var sc = window.scrollY || 0;
      var prog = Math.min(1, sc / Math.max(1, host.clientHeight));

      world.rotation.y = mx * 0.05 + Math.sin(t * 0.08) * 0.012;
      world.rotation.x = my * 0.02;
      camera.position.y = 1.85 + prog * 1.5 - my * 0.15;
      camera.position.x = mx * 0.35;
      camera.position.z = 10.5 - prog * 1.2;
      camera.lookAt(0, 1.5 + prog * 0.6, -2);

      stars.rotation.y = t * 0.004;

      renderer.render(scene, camera);
    }
    requestAnimationFrame(frame);
  };
})();
