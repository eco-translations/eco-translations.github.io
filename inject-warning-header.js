let body = document.querySelector('body');


let warningContainer = document.createElement('div');
warningContainer.innerHTML = `  
<div style="background-color: red;color: white;text-align: center;">
    <p>This is an <b>ununfocial</b>, community driven proposal translation for the website https://eco.com. Translation here can be missleading or incorect. </p>
    <p>For <b>offical</b> information, please <b>go to <a href="https://eco.com">https://eco.com</a> </b> </p>
</div>
`;
body.insertBefore(warningContainer, body.firstChild);