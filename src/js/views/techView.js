class technology {

    _generateMarkupTech() {
        return `
        <h3 class="destination__title"><span>03</span>SPACE LAUNCH 101</h3>
        <section class="tech__container">
            <article class="description__container">
                <div class="tech_dots">
                    <button class="vehicle">1</button>
                    <button class="spaceport">2</button>
                    <button class="capsule">3</button>
                </div>
                <div class="description">
                    <h4>THE TERMINOLOGY...</h4>
                    <h2>LAUNCH VEHICLE</h2>
                    <blockquote>
                        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload 
                        from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket 
                        is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring 
                        sight on the launch pad!
                    </blockquote>
                </div>
            </article>
            <img src="/src/images/technology/image-launch-vehicle-portrait.jpg" alt="tech__image">
        </section>`
    }

}

export default new technology();