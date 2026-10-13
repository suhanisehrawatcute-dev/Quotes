const quotes = [
 "I know it might seem that you will not leave a mark on the world. But I assure you, you will leave a mark on a person, and you might not even know it. And personally, that is way more important.",
"Growth is not linear; there are days you will fail. Some days you will feel that you can conquer the world. Sometimes the bad days will feel like they will last forever. But I promise the only constant is change. So your situation will change too.",
"You cannot smile while holding your tongue to the roof of your mouth. Gotcha, do not let anyone wipe off that beautiful smile.",
"Clouds are like bad moments. Sometimes they block your view of the sun for so long that you forget it is there. But they always disappear eventually.",
"Would your 7-year-old self be proud of you? Perhaps not; quitting is not an option sometimes. But you can always dance in the rain without getting told off, and my 7-year-old self would be so happy if she learnt I could do that.",
"Geniuses. Some are born. Some are made. Some study for hours just for people to call them a natural. A lot hides behind smiles and grades.",
"Remember a time you got angry at a stranger. Maybe they never got to enjoy a simple ice cream? Maybe their sister was dying, and they were rushing to get to the hospital. Maybe they just got fired for someone who did not deserve the job. Do not judge people quickly. Their lives are as complex as your own.",
"Opportunities run by quickly. Sometimes you do not want to try, but that is okay. But if you are afraid, try it anyway. I once wanted to quit badminton on the first day because I did not know anyone there. I did not. I played it for 2 years and counting. Try out for that new thing!!",
"Time passes really quickly. You feel every second, yet it slips out of your grasp. Life is way too short. Live fully. After all, it is not like you get a replay.",
"Welcome to life. There are plenty of tutorials. But almost none of them are good. The environment and the colours are horribly coded. And some of the NPCs, I cannot even begin. But there are quests. Your choice if you want to complete them.",
"You gotta outlive your enemies!"

];

const quoteElement = document.getElementById("quote");
const button = document.getElementById("new-quote");

button.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
});