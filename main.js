window.onload = function () {
    (function () {

        console.log('window load');

        createIframe();

        var iframe;
        function createIframe() {
            console.log('creating iframe...')
            iframe = document.createElement('iframe');
            iframe.src = `http://localhost:5173/`;
            iframe.style.cssText = "position: fixed; z-index: 9999; inset: 0; width: 100vw; height: 100vh; display: none;";
            iframe.title = "Chatbot";
            iframe.id = 'iframeButton';
            document.body.appendChild(iframe);
        }


        window.addEventListener('message', (event) => {
            const message = event.data;

            if (message === 'closeIframe') {

                console.log('getting message on parent');

                const iframe = document.getElementById('iframeButton');

                if (iframe) {
                    console.log('has iframe');
                    iframe.style.display = 'none';
                }
            }
        });

        function toggleIframe() {
            console.log('toggle iframe');
            const iframe = document.getElementById('iframeButton');
            iframe.style.display = 'block';
        }

        window.toggleIframe = toggleIframe;

    })();
}