const phrases = [
    "whois",
    "cat /root/mission.txt",
    "nmap -sV -O target",
    "sqlmap -u 'http://target.com' --dbs",
    "use exploit/multi/handler",
    "echo 'Skill is the only credential that matters.'",
    "./hack_the_gibson --init"
];
let i = 0, j = 0, currentPhrase = [], isDeleting = false, isEnd = false;
function loop() {
    isEnd = false;
    document.getElementById('typing-effect').innerHTML = currentPhrase.join('');
    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
            document.getElementById('typing-effect').innerHTML = currentPhrase.join('');
        }
        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop();
            j--;
            document.getElementById('typing-effect').innerHTML = currentPhrase.join('');
        }
        if (j == phrases[i].length) {
            isEnd = true;
            isDeleting = true;
        }
        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i == phrases.length) i = 0;
        }
    }
    const spedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (300 - 200) + 200;
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
    setTimeout(loop, time);
}
loop();