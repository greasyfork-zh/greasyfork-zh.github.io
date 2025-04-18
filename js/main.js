// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // FAQ切换功能
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        // 初始状态隐藏答案
        answer.style.display = 'none';
        
        question.addEventListener('click', () => {
            // 切换当前FAQ项的活动状态
            item.classList.toggle('active');
            
            // 如果当前FAQ项为活动状态，则显示答案，否则隐藏
            if (item.classList.contains('active')) {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });
    
    // 导航栏滚动效果
    const navHeader = document.querySelector('.nav-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navHeader.style.padding = '0.5rem 0';
            navHeader.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navHeader.style.padding = '1rem 0';
            navHeader.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // 平滑滚动到锚点
    const navLinks = document.querySelectorAll('.main-nav a, .footer-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 检查链接是否指向页内锚点
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // 计算目标元素距离顶部的位置，减去导航栏高度
                    const navHeight = navHeader.offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    
                    // 平滑滚动到目标位置
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // 添加顶部返回按钮
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.display = 'none';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.width = '50px';
    backToTopButton.style.height = '50px';
    backToTopButton.style.borderRadius = '50%';
    backToTopButton.style.backgroundColor = 'var(--primary-color)';
    backToTopButton.style.color = 'white';
    backToTopButton.style.border = 'none';
    backToTopButton.style.fontSize = '20px';
    backToTopButton.style.fontWeight = 'bold';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.zIndex = '99';
    backToTopButton.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    
    document.body.appendChild(backToTopButton);
    
    // 显示/隐藏返回顶部按钮
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    // 点击返回顶部
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 结构化数据 - 添加JSON-LD以提高SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "GreasyFork脚本宝库 - GreasyFork镜像站",
        "url": window.location.origin,
        "description": "专业的中文用户脚本资源导航站，提供GreasyFork镜像站(greasyfork-zh.org)访问入口和使用教程",
        "keywords": "greasyfork,greasyfork镜像站,greasyfork-zh,油猴脚本,tampermonkey",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://greasyfork-zh.org/scripts/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        },
        "sameAs": [
            "https://greasyfork.org/",
            "https://greasyfork-zh.org/"
        ]
    };
    
    // 将JSON-LD添加到页面
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);
}); 