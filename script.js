let e = document.querySelector("span")
let yaw = document.querySelector(".container")
let tal = document.querySelector("img")
let ne = document.createElement("img")
let pere = document.querySelectorAll("li")
let desc_ele = document.querySelector(".desc")
let raw = document.querySelector("button")
let a1 = "a1.jpg",
    a2 = "a2.jpg",
    a3 = "a3.jpg",
    a4 = "a4.jpg",
    a5 = "a5.jpg";

let desc4 = "Apple Watch is a wearable smartwatch that allows users to accomplish a variety of tasks, including making phone calls, sending text messages and reading email. ... In addition to using a Bluetooth connection, the watch can also connect with an iPhone if it is on the same Wi-Fi network.",
    desc1 = "They are wireless earbud-style headphones with microphones, dual accelerometers, IR sensors used to pause music if they are not in the user's ears, and motion touch sensors that are used to activate controls.",
    desc3 = "The iPhone 13 has a 6.1-inch screen, and the iPhone 13 mini has a 5.4-inch screen. They both use Apple's Ceramic Shield cover glass, which adds improved drop protection. The Super Retina XDR display is 28% brighter up to 800 nits for regular content, 1200 nits for HDR.",
    desc2 = "The new AirPods — complete with Wireless Charging Case — deliver the wireless headphone experience, reimagined. Just pull them out of the case and they're ready to use with your iPhone, Apple Watch, iPad, or Mac. After a simple one-tap setup, AirPods work like magic. They're automatically on and always connected",
    desc5 = "The new AirPods — complete with Wireless Charging Case — deliver the wireless headphone experience, reimagined. Just pull them out of the case and they're ready to use with your iPhone, Apple Watch, iPad, or Mac. After a simple one-tap setup, AirPods work like magic. They're automatically on and always connected"



let r = [
    ["headphones", a1, desc1, "buy1.html"],
    ["AirPods", a2, desc2, "buy2.html"],
    ["Iphone13", a3, desc3, "buy3.html"],
    ["Apple Watch", a4, desc4, "buy4.html"],
    ["Mac Book", a5, desc5, "buy5.html"]
]


po = 0
setInterval(function() {
    pr(r[po][0], r[po][1], r[po][2], r[po][3])

    po += 1
    if (po > r.length - 1) {
        po = 0
    }


}, 3000)



function pr(s, u, t, opz) {
    ne.setAttribute("src", u)
    yaw.appendChild(ne)
    raw.onclick = () => {
        window.open(opz)


    }
    desc_ele.textContent = t
    var i = 0
    var y = s.length - 1
    var pa = setInterval(() => {
        e.textContent += s[i]
        i += 1
        if (i > y) {
            clearInterval(pa)
        }

    }, 100);
    e.textContent = ""
}