$(document).ready(function () {
    setGlitchText()
    setSkillsIcons()

    $('#skills-list').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        adaptiveHeight: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

function setGlitchText(params) {
    $("div.glitch").append("<div class='glitch-window'></div>");
    $("h1.glitched").clone().appendTo(".glitch-window");
}

function setSkillsIcons(params) {
    var skillsPath = './assets/icons/skills/';

    const skills = [
        'php',
        'html',
        'css',
        'javascript',
        'jquery',
        'git',
        'github',
        'mysql',
        'laravel',
        'bootstrap',
        'sass',
        'python',
        'wordpress',
        'amazon',
        'apache',
        'bitbucket',
        'docker',
        'heroku',
        'npm',
        'vagrant',
        'webpack',
    ];

    for (let i = 0; i < skills.length; i++) {
        let skillName = skills[i]
        let skillIcon = skillsPath + skillName

        $('#skills-list').append(`
            <div class="text-center">
                <img class="pb-2z" src="${skillIcon}.png">
                <span class="mt-2 mb-0">
                    <small class="skill-name">${skillName}</small>
                </span>
            </div>
        `)
    }
}