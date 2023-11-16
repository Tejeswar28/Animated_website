 gsap.from('#ap', {
             opacity: 0,
            scale: 0.8,
            duration: 1,
            delay: 1,
            repeat:-1,
            ease: 'elastic.out(1, 0.3)'
        });

        gsap.from('#download_now', {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            delay: 1,
            repeat:-1,
            ease: 'elastic.out(1, 0.3)'
        });
 gsap.to('.mid_h1', {
            duration: 3.5,
            ease: 'elastic.out(3,3.3)', // Elastic ease
            marginLeft: '0%', // Move to the final position
            fontSize: '60px', // Set the final font size
            repeat:-1,
        });

        // GSAP Animation for ghost image
        gsap.fromTo('.ghost', {
            x: '100%', // Start from the right
            repeat:-1,
            opacity: 0

        }, {
            duration: 2.5,
            ease: 'elastic.out(2, 2.5)', // Elastic ease
            x: -600, // Move to the original position of h1
            y:-90,
            opacity: 1,
             repeat:-1,
            delay: 0 // Delay the image animation to start after h1 animation
        });

 document.addEventListener("DOMContentLoaded", function () {
        gsap.from('.dup1', { opacity: 0, x: -100, rotation: -360, duration: 1, delay: 0.5,repeat:-1, ease: 'power4.out' });
        gsap.from('.dup2', { opacity: 0, x: -100, rotation: 360, duration: 1, delay: 1,repeat:-1, ease: 'power4.out' });
        gsap.from('.dup3', { opacity: 0, y: 50, duration: 1, delay: 1.5, repeat:-1,ease: 'power3.out' });
         gsap.from('.small_circle', { opacity: 0, x: -100, rotation: -360, repeat:-1,duration: 1, delay: 0.5, ease: 'power3.out' });

          gsap.from('.small_circle1', { opacity: 0, x: -100, rotation: -360, duration: 1,repeat:-1, delay: 0.5, ease: 'power4.out' });
         gsap.to('.maini-text', {
            duration: 3.5,
            ease: 'elastic.out(3,3.3)', // Elastic ease
            marginLeft: '0%', // Move to the final position
            fontSize: '60px', // Set the final font size
            repeat:-1,
        });


 gsap.to('.subi-text', {
            duration: 3.5,
            ease: 'elastic.out(3,3.3)', // Elastic ease
            marginLeft: '0%', // Move to the final position
            fontSize: '20px', // Set the final font size
            repeat:-1,
        });
    });   

            const rotatingImage = document.querySelector('.rotating-image_design');

        gsap.to(rotatingImage, {
            rotation: 360, // Rotate 360 degrees
            ease: 'linear',
            duration: 2,
            repeat:-1, // Repeat indefinitely
        });

        const movingCircle = document.querySelector('.moving-circle_design');

        gsap.to(movingCircle, {
            x: '90%', // Move to the right end
            ease: 'linear',
            duration: 2,
            repeat: -1, // Repeat indefinitely
            yoyo: true, // Reverse the animation to create a back-and-forth effect
        });
 const line = document.querySelector('.line');
        const dots = document.querySelector('.dots');
        const dotElements = document.querySelectorAll('.dot');
        const content = document.querySelector('.content9');
        const textElements = document.querySelectorAll('.text');

        gsap.to(line, { height: '80%', duration: 1, delay: 1, repeat:-1,ease: 'power2.inOut' });

        gsap.to(dots, { opacity: 1, duration: 1,repeat:-1, delay: 2 });

        dotElements.forEach((dot, index) => {
            gsap.to(dot, { height: '20px', width: '20px',repeat:-1, duration: 1, delay: 1 + index * 0.5 });
        });

        textElements.forEach((text, index) => {
            gsap.from(text, { opacity: 0, y: '50%', duration: 1, repeat:-1,delay: 1 + index * 1, ease: 'power3.out' });
        });

gsap.to('.mid_h1_5', {
            duration: 3.5,
            ease: 'elastic.out(2,1.3)', // Elastic ease
            marginLeft: '0%', // Move to the final position
            fontSize: '60px', // Set the final font size
            repeat:-1
        });

       gsap.to('.mid_h4_5', {
            duration: 3.5,
            ease: 'elastic.out(2,1.3)', // Elastic ease
            marginLeft: '0%', 
            repeat:-1,// Move to the final position
            fontSize: '20px', // Set the final font size

        });

        // GSAP Animation for ghost image
        gsap.fromTo('.ghost_5', {
            x: '100%', // Start from the right
            opacity: 0,
            repeat:-1
        }, {
            duration: 3.5,
            ease: 'elastic.out(3, 1.5)', // Elastic ease
            x: -620, // Move to the original position of h1
            y:-50,
            opacity: 1,
            repeat:-1,
            delay: 0.5 // Delay the image animation to start after h1 animation
        });

  gsap.from(".slider_11, .button_11", { opacity: 0, y: -50, duration: 1,repeat:-1, ease: "elastic.out(1, 0.5)" });
        gsap.from(".slider_22, .button_22", { opacity: 0, y: -50, duration: 1,repeat:-1, ease: "elastic.out(1, 0.5)", delay: 0.5 });
        gsap.from(".slider_33, .button_33", { opacity: 0, y: -50, duration: 1, repeat:-1,ease: "elastic.out(1, 0.5)", delay: 1 });
        gsap.from(".slider_44, .button_44", { opacity: 0, y: -50, duration: 1,repeat:-1, ease: "elastic.out(1, 0.5)", delay: 1.5 });

   gsap.from(".circle_6_1 img, .text_6_1", {
            opacity: 0,
            y: 20,
            duration: 1,
            stagger: 0.5,
            repeat:-1,
            ease: "power3.out",
        });
         gsap.from(".circle_6_1 p, .text_6_1", {
            opacity: 0,
            y: 20,
            duration: 1,
            stagger: 0.5,
            repeat:-1,
            ease: "power4.out",
        });
          gsap.from(".container_6_1", {
            opacity: 0,
            y: 20,
            duration: 1,
            stagger: 0.5,
            repeat:-1,
            ease: "power4.out",
        });
 gsap.from('.button_7', {
             opacity: 0,
            scale: 0.8,
            duration: 2,
            delay: 1,
            repeat:-1,
            ease: 'elastic.out(1, 0.3)'
        });


gsap.to('.goofy-text', { rotation: 360, duration: 2, ease: "bounce.out" });

 gsap.from('.op4', {
             opacity: 0,
            scale: 0.8,
            duration: 2,
            delay: 1,
            repeat:-1,
            ease: 'elastic.out(1, 0.3)'
        });

  gsap.from('.polo', {
             opacity: 0,
            scale: 0.8,
            duration: 2,
            delay: 1,
            repeat:-1,
            ease: 'elastic.out(1, 0.3)'
        });

