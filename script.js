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
    })
});

function setGlitchText(params) {
    $("div.glitch").append("<div class='glitch-window'></div>")
    $("h1.glitched").clone().appendTo(".glitch-window")
}

function setSkillsIcons(params) {
    var skillsPath = './assets/icons/skills/'

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

function whatsSendMessage() {
    let num = `16992338091`
    let msg = `Olá, Peter! Eu encontrei o seu contato aqui no seu portfólio e gostaria de saber:`

    window.open(`https://wa.me/${num}?text=${msg}`, '_blank');
}

function validateContactForm() {
    let validate = true

    if (!$('#subject').val()) {
        validate = false
    }

    if (!$('#name').val()) {
        validate = false
    }

    if (!$('#email').val()) {
        validate = false
    }

    if (!$('#message').val()) {
        validate = false
    }

    return validate
}

function sendEmailContact() {
    if (!validateContactForm()) {
        Alert($('#emailAlert'), 'Por favor, preencha todos os campos obrigatórios.', 'warning')
        return
    }

    let subject = $('#subject').val()
    let phone = $('#phone').val()
    let name = $('#name').val()
    let email = $('#email').val()
    let message = $('#email').val()

    let body = `Email: ${email}
                Nome: ${name}
                Telefone: ${phone}
                Mensagem: ${message}
                `

    window.open(`mailto:peterpaulodev@gmail.com?subject=${subject}&body=${body}`)
}

function Alert(alertEl, message, type) {
    if ($('.alert').length) {
        $('.alert').detach()
    }

    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'


    alertEl.append(wrapper)
}