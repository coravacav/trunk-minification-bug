window.TreeSitter.init().then(async () => {
    document.body.innerHTML = 'Not working!';

    const language = await window.TreeSitter.Language.load(`rust.wasm`);

    document.body.innerHTML = 'It is working!';
});
