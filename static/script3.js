$(document).ready(function () {
    // scena 3D

    const scene = new THREE.Scene();
    const axes = new THREE.AxesHelper(1000)
    scene.add(axes)
    const geometry = new THREE.BoxGeometry(100, 100, 100);
    // kamera perspektywiczna - przeczytaj dokładnie objaśnienia w komentarzach
    const material = new THREE.MeshPhongMaterial({
        color: 0x009933,
        side: THREE.DoubleSide,
        specular: 0xffffff,
        shininess: 50,
        side: THREE.DoubleSide
    });
    const light = new THREE.DirectionalLight(0xffff00, 10);
    light.position.set(1, 1, 1);
    scene.add(light);

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    const camera = new THREE.PerspectiveCamera(
        45,    // kąt patrzenia kamery (FOV - field of view)
        16 / 9,    // proporcje widoku, powinny odpowiadać proporcjom naszego ekranu przeglądarki
        0.1,    // minimalna renderowana odległość
        10000    // maksymalna renderowana odległość od kamery
    );

    // renderer wykorzystujący WebGL - działa stabilnie na wszystkich

    const renderer = new THREE.WebGLRenderer();

    // kolor tła sceny - uwaga na prefix 0x a nie #

    renderer.setClearColor(0x000000);

    // ustal rozmiary renderowanego okna w px (szer, wys)

    renderer.setSize(window.innerWidth, window.innerHeight);

    // dodanie renderera do diva, który istnieje na scenie

    $("#root").append(renderer.domElement);


    camera.position.set(100, 100, 100)

    camera.lookAt(scene.position);

    // kluczowy element - animacja
    light.intensity = document.getElementById("slider").value;
    function render() {
        requestAnimationFrame(render);
        camera.fov = 80;
        cube.rotation.y += 0.01;
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);
        light.intensity = document.getElementById("slider").value;
    }


    render();
})