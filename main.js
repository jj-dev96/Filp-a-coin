 class CoinToss {
            constructor() {
                this.coin = document.getElementById('coin');
                this.flipBtn = document.getElementById('flipBtn');
                this.result = document.getElementById('result');
                this.isFlipping = false;
                this.init();
            }
            
            init() {
                this.flipBtn.addEventListener('click', () => this.flipCoin());
                this.coin.addEventListener('click', () => this.flipCoin());
            }
            
            flipCoin() {
                if (this.isFlipping) return;
                
                this.isFlipping = true;
                this.flipBtn.disabled = true;
                this.result.classList.remove('show', 'heads-win', 'tails-win');
                
                // Add flipping animation
                this.coin.classList.add('flipping');
                
                // Determine result
                const isHeads = Math.random() < 0.5;
                
                // Show result after animation
                setTimeout(() => {
                    this.showResult(isHeads);
                    this.coin.classList.remove('flipping');
                    
                    // Set final position
                    if (isHeads) {
                        this.coin.style.transform = 'rotateY(0deg)';
                    } else {
                        this.coin.style.transform = 'rotateY(180deg)';
                    }
                    
                    this.isFlipping = false;
                    this.flipBtn.disabled = false;
                }, 2000);
            }
            
            showResult(isHeads) {
                const resultText = isHeads ? '🎉 HEADS WINS!' : '🎊 TAILS WINS!';
                this.result.textContent = resultText;
                
                // Add appropriate styling class
                if (isHeads) {
                    this.result.classList.add('heads-win');
                } else {
                    this.result.classList.add('tails-win');
                }
                
                setTimeout(() => {
                    this.result.classList.add('show');
                }, 200);
            }
        }
        
        // Initialize the coin toss when page loads
        document.addEventListener('DOMContentLoaded', () => {
            new CoinToss();
        });
        
        // Add subtle hover effect to container
        document.addEventListener('mousemove', (e) => {
            const container = document.querySelector('.container');
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 50;
            const rotateY = (centerX - x) / 50;
            
            container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        document.addEventListener('mouseleave', () => {
            const container = document.querySelector('.container');
            container.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });

        (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'966aa59d7173f313',t:'MTc1Mzc3MTQ1OC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();