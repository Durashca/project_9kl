document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `<footer class="bd-footer py-4 mt-5s bg-body-tertiary">
    <div class="container">
        <p>ВсеЗнай 2024</p>
        <p>&copy; <strong>Космылев Владислав Евгеньевич</strong></p>
    </div>
</footer>`;

    const footerElement = document.createElement('div');
    footerElement.innerHTML = footerHTML;

    document.body.appendChild(footerElement);
});