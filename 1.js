document.addEventListener('DOMContentLoaded', function() {
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const userIcon = document.querySelector('.fa-user').parentElement;
    const closeBtns = document.querySelectorAll('.close');
    const registerLink = document.querySelector('.register');
    const loginLink = document.querySelector('.switch-to-login');

    // 显示登录模态框
    userIcon.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.style.display = 'block';
        document.body.classList.add('modal-open');
    });

    // 切换到注册界面
    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.style.display = 'none';
        registerModal.style.display = 'block';
        document.body.classList.add('modal-open');
    });

    // 切换回登录界面
    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        registerModal.style.display = 'none';
        loginModal.style.display = 'block';
    });

    // 关闭按钮功能
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
            document.body.classList.remove('modal-open');
        });
    });

    // 点击模态框外部关闭
    window.addEventListener('click', function(e) {
        if (e.target == loginModal || e.target == registerModal) {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });

    // 处理登录表单提交
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('登录提交');
    });

    // 处理注册表单提交
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const password = document.getElementById('reg-password').value;
        const confirmPassword = document.getElementById('reg-confirm-password').value;
        
        if (password !== confirmPassword) {
            alert('两次输入的密码不一致！');
            return;
        }
        console.log('注册提交');
    });
}); 