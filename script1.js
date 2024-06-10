const wrapper = document.querySelectorAll(".cardWrap");

wrapper.forEach(element => {
    let state = {
        mouseX: 0,
        mouseY: 0,
        height: element.clientHeight,
        width: element.clientWidth
    };

    element.addEventListener("mousemove", ele => {
        const card = element.querySelector(".card");
        const cardBg = card.querySelector(".cardBg");
        state.mouseX = ele.pageX - (element.offsetLeft) - state.width / 2;

        state.mouseY = ele.pageY - (element.offsetTop) - state.height / 2;


        // parallax angle in card
        const angleX = (state.mouseX / state.width) * 30;

        const angleY = (state.mouseY / state.height) * -30;



        card.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg) `;

        // parallax position of background in card
        const posX = (state.mouseX / state.width) * -40;
        const posY = (state.mouseY / state.height) * -40;
        cardBg.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
    });

    element.addEventListener("mouseout", () => {
        const card = element.querySelector(".card");
        const cardBg = card.querySelector(".cardBg");
        card.style.transform = `rotateY(0deg) rotateX(0deg) `;
        cardBg.style.transform = `translateX(0px) translateY(0px)`;
    });
});

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 10) {
        document.getElementById("hllo").style.fontSize = "70px";
    } else {
        document.getElementById("hllo").style.fontSize = "90px";
    }
}

quotes = [        
  'There is no monument dedicated to the memory of a committee.', 
  'Wanting to be someone you\'re not is a waste of the person you are.',
  'If you can find a path with no obstacles, it probably doesn\'t lead anywhere.',
  'The great thing about a computer notebook is that no matter how much you stuff into it, it doesn\'t get bigger or heavier.',
  'Mistakes are the portals of discovery.',
  'Death is a friend of ours; and he that is not ready to entertain him is not at home.',
  'Don\'t let yourself forget what it\'s like to be sixteen.'
]

# Counts total images
totalQuotes = quotes.length

# Get Quote
getQuote = ->
  # Gets random image from array
  activeQuotes = quotes[Math.floor((Math.random() * totalQuotes))]

  # Changes background of div
  $('quote').text(activeQuotes)

getQuote()

$('button').on 'click', (e) ->
  e.preventDefault()
  
  getQuote()
