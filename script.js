'use strict';


const container = document.querySelector('.container');

let timeout = 1.5 * 1000;// 1.5 secs 


setTimeout(() => {
    container.innerHTML = `<div class='num c1'>10<div>`;
    setTimeout(() => {
        container.innerHTML = `<div class='num c2'>9<div>`;
        setTimeout(() => {
            container.innerHTML = `<div class='num c3'>8<div>`;
            setTimeout(() => {
                container.innerHTML = `<div class='num c1'>7<div>`;
                setTimeout(() => {
                    container.innerHTML = `<div class='num c2'>6<div>`;
                    setTimeout(() => {
                        container.innerHTML = `<div class='num c3' >5<div>`;
                        setTimeout(() => {
                            container.innerHTML = `<div class='num c1'>4<div>`;
                            setTimeout(() => {
                                container.innerHTML = `<div class='num c2'>3<div>`;
                                setTimeout(() => {
                                    container.innerHTML = `<div class='num c3'>2<div>`;
                                    setTimeout(() => {
                                        container.innerHTML = `<div class='num c1'>1<div>`;
                                        setTimeout(() => {
                                            container.innerHTML = `<span class=c1>Happy</span>  <span class=c2>Independence</span>  <span class=c3>Day</span>`;
                                        }, timeout);

                                    }, timeout);

                                }, timeout);

                            }, timeout);

                        }, timeout);

                    }, timeout);

                }, timeout);

            }, timeout);

        }, timeout);

    }, timeout);

}, timeout);