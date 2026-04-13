/**
 * Cinematic Upgrade System Animation Engine
 * Professional gaming UI with 4-phase animation cycle
 */

class CinematicUpgradeSystem {
    constructor() {
        this.isAnimating = false;
        this.currentPhase = 0;
        this.animationSpeed = 1;
        this.successRate = 45;
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        
        this.initializeElements();
        this.initializeCanvas();
        this.bindEvents();
        this.startParticleSystem();
    }
    
    initializeElements() {
        // Main elements
        this.upgradeButton = document.getElementById('upgradeButton');
        this.upgradeOverlay = document.getElementById('upgradeOverlay');
        this.upgradeContainer = document.getElementById('upgradeContainer');
        
        // Items
        this.currentItem = document.getElementById('currentItem');
        this.targetItem = document.getElementById('targetItem');
        
        // Meter
        this.upgradeMeter = document.getElementById('upgradeMeter');
        this.meterFill = document.getElementById('meterFill');
        this.meterPointer = document.getElementById('meterPointer');
        this.successRateText = document.getElementById('successRate');
        
        // Energy
        this.upgradeEnergy = document.getElementById('upgradeEnergy');
        
        // Effects
        this.successEffect = document.getElementById('successEffect');
        this.failEffect = document.getElementById('failEffect');
        
        // Status
        this.upgradeStatus = document.getElementById('upgradeStatus');
        this.statusResult = document.getElementById('statusResult');
        
        // Canvas
        this.particleCanvas = document.getElementById('particleCanvas');
        
        // Sounds
        this.chargingSound = document.getElementById('chargingSound');
        this.successSound = document.getElementById('successSound');
        this.failSound = document.getElementById('failSound');
    }
    
    initializeCanvas() {
        this.canvas = this.particleCanvas;
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    bindEvents() {
        this.upgradeButton.addEventListener('click', () => this.startUpgrade());
        
        // Add hover effects
        this.upgradeButton.addEventListener('mouseenter', () => {
            if (!this.isAnimating) {
                this.upgradeButton.style.transform = 'translateY(-2px) scale(1.05)';
            }
        });
        
        this.upgradeButton.addEventListener('mouseleave', () => {
            if (!this.isAnimating) {
                this.upgradeButton.style.transform = 'translateY(0) scale(1)';
            }
        });
    }
    
    // Main upgrade sequence
    async startUpgrade() {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        this.upgradeButton.disabled = true;
        
        // Phase 1: Preparation (0.5-1s)
        await this.phasePreparation();
        
        // Phase 2: Charging (1-2s)
        await this.phaseCharging();
        
        // Phase 3: Tension Peak (0.5-1s)
        await this.phaseTensionPeak();
        
        // Phase 4: Result
        await this.phaseResult();
        
        // Reset
        this.resetSystem();
    }
    
    // Phase 1: Preparation
    async phasePreparation() {
        console.log('🎬 Phase 1: Preparation');
        
        // Show status
        this.showStatus('preparation');
        
        // Activate overlay
        this.upgradeOverlay.classList.add('active');
        
        // Add glow to items
        this.currentItem.classList.add('pulse');
        this.targetItem.classList.add('pulse');
        
        // Subtle pulse animation
        await this.animatePreparationPulse();
        
        await this.delay(800);
    }
    
    // Phase 2: Charging
    async phaseCharging() {
        console.log('⚡ Phase 2: Charging');
        
        // Update status
        this.showStatus('charging');
        
        // Activate energy system
        this.upgradeEnergy.classList.add('active');
        
        // Start meter animation
        this.startMeterAnimation();
        
        // Add shake effect
        this.addShakeEffect();
        
        // Play charging sound
        this.playSound('charging');
        
        // Create energy particles
        this.createEnergyParticles();
        
        await this.delay(2000);
    }
    
    // Phase 3: Tension Peak
    async phaseTensionPeak() {
        console.log('🎯 Phase 3: Tension Peak');
        
        // Update status
        this.showStatus('tension');
        
        // Slow motion effect
        this.animationSpeed = 0.3;
        
        // Increase blur
        this.upgradeOverlay.style.backdropFilter = 'blur(10px)';
        
        // Slow down meter
        this.slowDownMeter();
        
        // Create tension particles
        this.createTensionParticles();
        
        await this.delay(1000);
    }
    
    // Phase 4: Result
    async phaseResult() {
        console.log('🎲 Phase 4: Result');
        
        // Determine success/fail
        const isSuccess = Math.random() * 100 < this.successRate;
        
        // Stop meter at final position
        const finalPosition = this.stopMeter();
        
        if (isSuccess) {
            await this.showSuccessResult(finalPosition);
        } else {
            await this.showFailResult(finalPosition);
        }
        
        await this.delay(2000);
    }
    
    // Animation helpers
    showStatus(phase) {
        // Hide all status messages
        document.querySelectorAll('.upgrade-status > div').forEach(el => {
            el.classList.remove('active');
        });
        
        // Show current phase status
        const statusEl = document.querySelector(`.status-${phase}`);
        if (statusEl) {
            statusEl.classList.add('active');
        }
    }
    
    async animatePreparationPulse() {
        return new Promise(resolve => {
            let pulseCount = 0;
            const maxPulses = 3;
            
            const pulse = () => {
                // Create pulse particles
                for (let i = 0; i < 5; i++) {
                    this.createPulseParticle();
                }
                
                pulseCount++;
                if (pulseCount < maxPulses) {
                    setTimeout(pulse, 200);
                } else {
                    resolve();
                }
            };
            
            pulse();
        });
    }
    
    startMeterAnimation() {
        this.meterAnimation = setInterval(() => {
            const position = 20 + Math.sin(Date.now() * 0.005) * 60;
            this.updateMeterPosition(position);
        }, 50);
    }
    
    updateMeterPosition(position) {
        this.meterFill.style.width = position + '%';
        this.meterPointer.style.left = position + '%';
    }
    
    slowDownMeter() {
        if (this.meterAnimation) {
            clearInterval(this.meterAnimation);
        }
        
        this.meterAnimation = setInterval(() => {
            const position = 30 + Math.sin(Date.now() * 0.001) * 40;
            this.updateMeterPosition(position);
        }, 100);
    }
    
    stopMeter() {
        if (this.meterAnimation) {
            clearInterval(this.meterAnimation);
        }
        
        const finalPosition = 20 + Math.random() * 60;
        this.updateMeterPosition(finalPosition);
        
        return finalPosition;
    }
    
    addShakeEffect() {
        this.currentItem.classList.add('shake');
        this.targetItem.classList.add('shake');
        
        setTimeout(() => {
            this.currentItem.classList.remove('shake');
            this.targetItem.classList.remove('shake');
        }, 500);
    }
    
    async showSuccessResult(finalPosition) {
        console.log('✅ SUCCESS!');
        
        // Update status
        this.statusResult.textContent = 'Upgrade Successful!';
        this.statusResult.style.color = '#10b981';
        this.showStatus('result');
        
        // Play success sound
        this.playSound('success');
        
        // Show success effect
        this.successEffect.classList.add('active');
        
        // Transform current item
        this.currentItem.classList.add('transform-success');
        
        // Create success particles
        this.createSuccessParticles();
        
        // Add confetti
        this.createConfetti();
        
        await this.delay(1500);
    }
    
    async showFailResult(finalPosition) {
        console.log('❌ FAILED!');
        
        // Update status
        this.statusResult.textContent = 'Upgrade Failed!';
        this.statusResult.style.color = '#ef4444';
        this.showStatus('result');
        
        // Play fail sound
        this.playSound('fail');
        
        // Show fail effect
        this.failEffect.classList.add('active');
        
        // Transform current item (break)
        this.currentItem.classList.add('transform-fail');
        
        // Create fail particles
        this.createFailParticles();
        
        // Screen shake
        this.shakeScreen();
        
        await this.delay(1500);
    }
    
    // Particle System
    startParticleSystem() {
        this.animateParticles();
    }
    
    animateParticles() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        this.particles = this.particles.filter(particle => {
            particle.update();
            particle.draw(this.ctx);
            return particle.life > 0;
        });
        
        requestAnimationFrame(() => this.animateParticles());
    }
    
    createPulseParticle() {
        const particle = new Particle({
            x: this.canvas.width / 2 + (Math.random() - 0.5) * 100,
            y: this.canvas.height / 2 + (Math.random() - 0.5) * 100,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            color: '#8b5cf6',
            size: Math.random() * 3 + 1,
            life: 1,
            decay: 0.02
        });
        
        this.particles.push(particle);
    }
    
    createEnergyParticles() {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const particle = new Particle({
                    x: this.canvas.width / 2,
                    y: this.canvas.height / 2,
                    vx: (Math.random() - 0.5) * 8,
                    vy: (Math.random() - 0.5) * 8,
                    color: ['#8b5cf6', '#3b82f6', '#06b6d4'][Math.floor(Math.random() * 3)],
                    size: Math.random() * 4 + 2,
                    life: 1,
                    decay: 0.01
                });
                
                this.particles.push(particle);
            }, i * 50);
        }
    }
    
    createTensionParticles() {
        for (let i = 0; i < 30; i++) {
            const particle = new Particle({
                x: this.canvas.width / 2 + (Math.random() - 0.5) * 200,
                y: this.canvas.height / 2 + (Math.random() - 0.5) * 200,
                vx: (Math.random() - 0.5) * 4,
                vy: (Math.random() - 0.5) * 4,
                color: '#fbbf24',
                size: Math.random() * 3 + 1,
                life: 1,
                decay: 0.005
            });
            
            this.particles.push(particle);
        }
    }
    
    createSuccessParticles() {
        for (let i = 0; i < 50; i++) {
            const angle = (Math.PI * 2 * i) / 50;
            const speed = Math.random() * 5 + 2;
            
            const particle = new Particle({
                x: this.canvas.width / 2,
                y: this.canvas.height / 2,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                color: ['#10b981', '#fbbf24', '#8b5cf6'][Math.floor(Math.random() * 3)],
                size: Math.random() * 6 + 3,
                life: 1,
                decay: 0.008,
                gravity: 0.1
            });
            
            this.particles.push(particle);
        }
    }
    
    createFailParticles() {
        for (let i = 0; i < 30; i++) {
            const particle = new Particle({
                x: this.canvas.width / 2 + (Math.random() - 0.5) * 100,
                y: this.canvas.height / 2 + (Math.random() - 0.5) * 100,
                vx: (Math.random() - 0.5) * 10,
                vy: Math.random() * -5,
                color: '#ef4444',
                size: Math.random() * 4 + 2,
                life: 1,
                decay: 0.015,
                gravity: 0.2
            });
            
            this.particles.push(particle);
        }
    }
    
    createConfetti() {
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const particle = new Particle({
                    x: Math.random() * this.canvas.width,
                    y: -20,
                    vx: (Math.random() - 0.5) * 4,
                    vy: Math.random() * 3 + 1,
                    color: ['#10b981', '#fbbf24', '#3b82f6', '#ec4899'][Math.floor(Math.random() * 4)],
                    size: Math.random() * 4 + 2,
                    life: 1,
                    decay: 0.003,
                    gravity: 0.05,
                    rotation: Math.random() * 360,
                    rotationSpeed: (Math.random() - 0.5) * 10
                });
                
                this.particles.push(particle);
            }, i * 20);
        }
    }
    
    // Sound System
    playSound(type) {
        try {
            let sound;
            switch (type) {
                case 'charging':
                    sound = this.chargingSound;
                    break;
                case 'success':
                    sound = this.successSound;
                    break;
                case 'fail':
                    sound = this.failSound;
                    break;
            }
            
            if (sound) {
                sound.currentTime = 0;
                sound.volume = 0.3;
                sound.play().catch(e => console.log('Sound play failed:', e));
            }
        } catch (error) {
            console.log('Sound system error:', error);
        }
    }
    
    // Effects
    shakeScreen() {
        this.upgradeContainer.classList.add('shake');
        setTimeout(() => {
            this.upgradeContainer.classList.remove('shake');
        }, 500);
    }
    
    // Utility functions
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    resetSystem() {
        // Reset animation state
        this.isAnimating = false;
        this.currentPhase = 0;
        this.animationSpeed = 1;
        
        // Reset UI
        this.upgradeButton.disabled = false;
        this.upgradeOverlay.classList.remove('active');
        this.upgradeOverlay.style.backdropFilter = 'blur(0px)';
        
        // Reset items
        this.currentItem.classList.remove('pulse', 'transform-success', 'transform-fail', 'shake');
        this.targetItem.classList.remove('pulse', 'shake');
        
        // Reset energy
        this.upgradeEnergy.classList.remove('active');
        
        // Reset effects
        this.successEffect.classList.remove('active');
        this.failEffect.classList.remove('active');
        
        // Reset status
        document.querySelectorAll('.upgrade-status > div').forEach(el => {
            el.classList.remove('active');
        });
        
        // Reset button
        this.upgradeButton.style.transform = 'translateY(0) scale(1)';
        
        console.log('🔄 System reset complete');
    }
}

// Particle Class
class Particle {
    constructor(options) {
        this.x = options.x;
        this.y = options.y;
        this.vx = options.vx;
        this.vy = options.vy;
        this.color = options.color;
        this.size = options.size;
        this.life = options.life;
        this.decay = options.decay;
        this.gravity = options.gravity || 0;
        this.rotation = options.rotation || 0;
        this.rotationSpeed = options.rotationSpeed || 0;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity;
        this.life -= this.decay;
        this.rotation += this.rotationSpeed;
        
        // Fade out
        this.opacity = Math.max(0, this.life);
    }
    
    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        
        // Create gradient
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
    }
}

// Initialize system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.upgradeSystem = new CinematicUpgradeSystem();
    console.log('🎬 Cinematic Upgrade System initialized');
});

// Add some interactive elements
document.addEventListener('mousemove', (e) => {
    if (window.upgradeSystem && !window.upgradeSystem.isAnimating) {
        // Create subtle mouse trail particles
        if (Math.random() < 0.1) {
            const particle = new Particle({
                x: e.clientX + (Math.random() - 0.5) * 20,
                y: e.clientY + (Math.random() - 0.5) * 20,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                color: '#8b5cf6',
                size: Math.random() * 2 + 1,
                life: 0.5,
                decay: 0.02
            });
            
            window.upgradeSystem.particles.push(particle);
        }
    }
});