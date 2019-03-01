
//---------Game Start screen to Player Select screen
function StartGame() {
    var y = document.getElementById("rules");
    var z = document.getElementById("logo");

    y.style.display = "flex";
    z.style.display = "none";
}



//---------Player Select screen to Character Select screen
//---------Player Selection

function Rules() {
    var w = document.getElementById("rules");

    var y = document.getElementById("chad");
    var z = document.getElementById("stacy");



    w.style.display = "none";

    y.style.display = "flex";
    z.style.display = "flex";
}



//---------Character Select screen to Question 1 Screen
//---------Character Selection
var textBox, one, two, three, four;//new dialog
function TransitionChar() {
    var x = document.getElementById("stacy");
    var y = document.getElementById("chad");
    var z = document.getElementById("charPic");
    var w = document.getElementById("textBox");
    var v = document.getElementById("dialogBoxes");

    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "flex";
    w.style.display = "flex";
    v.style.display = "flex";
}
function TextChange(textBox,one,two,three,four) {
    var v = document.getElementById("one");
    var w = document.getElementById("two");
    var x = document.getElementById("three");
    var y = document.getElementById("four");
    var z = document.getElementById("textBox");

    v.innerHTML = one;
    w.innerHTML = two;
    x.innerHTML = three;
    y.innerHTML = four;
    z.innerHTML = textBox;
} //this function changes the dialog boxes and text box

var character;

function Chad() {
    character = 1;


    if (confirm("Are you sure you want to romance Colonial Chad???") === true) { //asks the user if they picked these options

        TransitionChar();
        TextChange("*you see a cute house*", "", "", "", "Next");
        document.getElementById("audio").src = "hotel1.ogg";

    }
    else {
        location.reload(); //restarts the program
    }

}
function Stacy() {
    character = 2;


    if (confirm("Are you sure you want to romance Stacy Halls???") === true) { //asks the user if they picked these options

        TransitionChar();
        TextChange("*you see a cute house*", "", "", "", "Next");
        document.getElementById("characterPicture").src = "SchoolGirl_Default.png";

        document.getElementById("audio").src = "Sandrealitor.ogg";
    }
    else {
        location.reload(); //restarts the program
    }
}



//---------Next Question
var question;
var clicks = 0;
function NextQuestion(question) {
    clicks++;
    switch (question) {
        case 1:
            selection = 1;
            ChangingDialog();
            PlayerSwitch();
            console.log("player one score: " + oneScore + " Player Two Score: " + twoScore);
            console.log(nextDialog + " next dialog");
            console.log(clicks + " clicks");

            break;
        case 2:
            selection = 2;
            ChangingDialog();
            PlayerSwitch();
            console.log("player one score: " + oneScore + " Player Two Score: " + twoScore);
            break;
        case 3:
            selection = 3;
            ChangingDialog();
            PlayerSwitch();
            console.log("player one score: " + oneScore + " Player Two Score: " + twoScore);
            break;
        case 4:
            selection = 4;
            ChangingDialog();
            PlayerSwitch();
            console.log("player one score: " + oneScore + " Player Two Score: " + twoScore);


            break;
    }
}



//---------Player switch and dialog counter and response
var player;
var playerTurn = 1;
var nextDialog = 1;
var end = false;
function PlayerSwitch() {

    playerTurn++;
    if (playerTurn % 2 === 0 && playerTurn % 4 !== 0) {
        player = 1;
        if (end===false) {
        alert("player 1's turn"); 
        }
     
    }
    else if(playerTurn%4===0){
        player = 2;
        if (end===false) {
        alert("player 2's turn");
        }

    }


    if (clicks%2===0) {
        if (character === 1) {
            switch (nextDialog) {//chad responses
                case 1:
                    ReactionImage(selection, angryChad, sadChad, thumbChad, happyChad);//reaction image
                    ChangingResponse(selection, "Colonial Chad stops looking at his calves and leers at you. “You saying I don’t have a great foundation already, bro?"
                        , "Colonial Chad keeps inspecting his calves. “Nah, I can do better. I’m from the Colonial Revival, I should be in better shape for 90 years old.” "
                        , "Colonial Chad grins while checking out his calves. “Thanks, man. Gotta keep up with the upkeep, know what I’m sayin’?” "
                        , "Colonial Chad looks up from eyeing his calves and grins at you. “Naw, man, but thanks for asking.");//player 1 response
                    nextDialog++;
                    break;

                case 2:
                    ReactionImage(selection, angryChad, sadChad, thumbChad, happyChad);
                    ChangingResponse(selection, "Colonial Chad looks haughty. “I’m already a dream home. Potential? I’m already hot property."
                        , "Colonial Chad bobs his head from side to side. “Wouldn’t mind having someone take care of that mold problem for me,” he mumbles to himself."
                        , "Colonial Chad swings his head, rattling his roof. “You’d never guess I get re-shingling treatments, would you?"
                        , "Colonial Chad stops hopping as much and looks almost bashful. “Oh, you picked me? I mean, why wouldn’t you pick me. Thanks, ...bro"
                    );
                    nextDialog++;
                    break;

                case 3:
                    ReactionImage(selection, happyChad, sadChad, angryChad, thumbChad);
                    ChangingResponse(selection, "Colonial Chad smirks. “Yeah, man, you get it! That’s just how it is. You gotta mix it up sometime, you know?"
                        , "Colonial Chad grins, but then looks down. “Yeah, man, it’s what I’m known for.”"
                        , "Colonial Chad looks pissed. “I never said that, bro! I just want some hotties to move in, man! I’m in my PRIME, guy!"
                        , "Colonial Chad nods. “Yeah, man. We’re on the same page, yeah.");
                    nextDialog++;
                    break;
                case 4:
                    ReactionImage(selection, sadChad, thumbChad, angryChad, happyChad);
                    ChangingResponse(selection,"Colonial Chad lowers the camera a bit. “Yeah… Me too. Yup. Definitely professional quality. Yeah…”"
                        , "Colonial Chad gets stars in his eyes. “Working with a pro?? Oh, wow. Heck yeah, man, that sounds amazing! But I want creative control!”"
                        , "Colonial Chad immediately pulls the camera to his side defensively. “Oh. Oh okay. I don’t have to-- I can show you later. What’s it to you, anyway? Don’t think I’m good enough?” "
                        , "Colonial Chad’s shudders flush a deep red. “I mean… Yeah, I guess… It’s just a hobby, you know, wanna look my best for… stuff.” ");
                    nextDialog++;
                    break;
                case 5:
                    ReactionImage(selection, angryChad, sadChad, thumbChad, happyChad);
                    ChangingResponse(selection, "Colonial Chad actually stomps his foot like a child. “NEVER! A healthy home is a happy home, bruh! Health is life ‘cause health is long life, bruh!” "
                        , "Colonial Chad keeps right on flexing. “That’s not a real answer, but whatever. I’m not scared, bro.” "
                        , "Colonial Chad flexes harder. “As long as you say I’ll be taken care of, bro.”"
                        , "Colonial Chad pauses his flexing to collect himself. “O--oh yeah? Not that I’m worried. But good to know they’ll keep me looking right, bro.” ");
                    nextDialog++;
                    end = true;

                    break;
                case 6:
                    Winner();
                    nextDialog++;
                    break;

            }
        }
        else if (character === 2) {
            switch (nextDialog) {//stacy responses
                case 1:
                    ReactionImage(selection,angryStacy,sickStacy,defaultStacy,heartsStacy);
                    ChangingResponse(selection
                        , "Stacy Halls scoffs, offended. “What kind of school is okay with a bad tardy record, huh? I’m leaving when this period ends, period."
                        , "Stacy Halls groans. “That’s what they said about the cleanup after someone blew up a stinkbomb in the labs. You know how long that took?"
                        , "Stacy Halls looks pleased with herself. “As long as you give me a good out. I have bored PTA parents to report to, you know."
                        , "Stacy Halls perks up. “Oh? Am I going to become... A private school? A COLLEGE?");
                    nextDialog++;
                    break;
                case 2:
                    ReactionImage(selection, angryStacy, sickStacy, defaultStacy, heartsStacy);
                    ChangingResponse(selection
                        , "Stacy Halls grabs her stomach and angrily tells you, “You think I don’t know about that? Not that you should be talking about going through all my pictures, WEIRDO.” "
                        , "Stacy Halls rolls her eyes. “That’s what everyone says. I know I’m a model school, but that doesn’t mean I need everyone fighting over me.”"
                        , "Stacy Halls suddenly looks more attentive. “The old outfits do overheat. And look like the ‘70s threw up on our cheerleaders. Yeah, you have my attention.”"
                        , "Stacy Halls almost jumps in place. “OH! Yes, I’ve been saying that forever! Everyone’s so worried about our facilities, but people need to listen to me talk more!” ");
                    nextDialog++;
                    break;
                case 3:
                    ReactionImage(selection, angryStacy, heartsStacy, defaultStacy, sickStacy);
                    ChangingResponse(selection
                        , "Stacy Halls instantly gets pissed. “Don’t take our music department! Gosh, why is everything always about give or take! Forget it.”"
                        , "Stacy Halls practically bounds in place. “See, that’s what I want to hear! One with swimming lanes and two diving boards is fine, I don’t need a hot tub or sauna or anything that fancy.” "
                        , "Stacy Halls sashays in place. “I look like I should have one, right? And that’s fine. I’d get work done for that.”"
                        , "Stacy Halls looks sick. “Ugh, weak-willed people make me wanna barf.” ");
                    nextDialog++;
                    break;
                case 4:
                    ReactionImage(selection, sickStacy, heartsStacy, defaultStacy, angryStacy);
                    ChangingResponse(selection
                        , "Stacy Halls frowns. “I mean, that’s good, I guess. Yeah, we’ve had a boxing team for... for over a decade, I mean... never mind.” "
                        , "Stacy Halls grins from ear to ear. “Thank you for noticing! That’s... really nice of you to say. We work really hard here, even if our arms aren’t-- never mind. Thanks! "
                        , "Stacy Halls looks satisfied with that answer. “That’s all you needed to say.” "
                        , "“OH!” Stacy Halls yelps immediately. “So you don’t care about my passion, and you gotta insult it too, huh? You’re not doing so well, man.” ");
                    nextDialog++;
                    break;
                case 5:
                    ReactionImage(selection, defaultStacy, angryStacy, sickStacy, heartsStacy);
                    ChangingResponse(selection
                        , "Stacy Halls smirks. “I appreciate someone who can collaborate. This could work for me.” "
                        , "Stacy Halls flares her nostrils. “Just gonna try to buy me, huh? You can’t even answer the question!” "
                        , "Stacy Halls gags. “Ugh, I’m good on empty promises. I get enough of those when kids ask for assignment extensions.” "
                        , "Stacy Halls looks taken aback, then subconsciously smiles. “I feel so understood. See, why can’t more people take the time to get to know each other?” ");
                    nextDialog++;
                    end = true;
                    break;
                case 6:
                    Winner();
                    nextDialog++;
                    break;
            }
        }
    }//responses
    if (clicks % 4 !== 0 && clicks % 2 !== 0) {
        if (character === 1 && nextDialog!==4) {
            document.getElementById("characterPicture").src = defaultChad;
        }
        else if (nextDialog === 4 && character===1) {
            document.getElementById("characterPicture").src = snapChad;
        }
        else if (character === 2) {
            document.getElementById("characterPicture").src = defaultStacy;
        }
    }
}



//---------Points 
var oneScore=0;
var twoScore=0;
var points;

function PointGiver(points) {
    if (player === 1) {
        oneScore += points;
    }
    else if (player === 2) {
        twoScore += points;
    }
}



//---------Next Dialog
//---------Changes the dialog and text everytime a both players go
function ChangingDialog() {
    if (character === 1) {
        switch (nextDialog) {
            case 1:
                TextChange("Two thousand and one… two thousand and three… two thousand and-- OH! Hey, sup boys, I didn’t see you there. Just doing some stair workouts. You don’t have to be a brick house to get BUILT LIKE ONE."
                    , "We could definitely hook you up with a brick facade!"
                    , "Two thousand and three, huh? Impressive."
                    , "You’re already looking great, Colonial Chad."
                    , "Hope I’m not interrupting your groove?");
                break;
            case 2:
                TextChange("Anyway, how can I help you? Need someone to raise the roof? </br> *Colonial Chad says, hopping from foot to foot.* </br></br>'I saw you were looking to go up for sale,' You tell him. </br></br> He nods, still hopping. 'And?'"
                    , "I see your potential. You could be someone’s dream home."
                    , "I can get you sold fast so you don’t have to worry about it."
                    , "I’m surprised you even need a realtor. Just look at those beautiful brown shingles"
                    , "I scouted you from the local listings. I want to represent you, Colonial Chad.");
                break;
            case 3:
                TextChange("'Well, I am looking to settle down,' Colonial Chad said 'Not that I have to. My open houses are legendary, bro. But wouldn’t mind having some in the bedrooms, you know? Putting the kitchen to use. Maybe even dusting out the cobwebs in the attic. Don’t get a lot of use out of it when you’re living alone.' Colonial Chad has stopped bounding between feet and is now staring at you, arms crossed. "
                    , "Open houses are great, but they never last."//+2
                    , "I’ve been to your open houses, they are legendary! I know you’re doing great."//+0
                    , "Sounds like you’re ready to be a family house."//-1
                    , "A warm home is a happy home. I feel you."//+1
                );
                break;
            case 4:
                TextChange("'So we’re gonna need pictures, right?'Colonial Chad asks. Before you can answer, he pulls a camera out of his toga. 'I do my own photography, you know. Exterior, interior. Never filters though, I’m not about filters!' He adds. He sounds very guilty."
                    , "Love it! I’m sure your pics are great."//+0
                    , "Great! We have a photographer on staff, too, if you’d want to work with them on some more complex shots."//+1
                    , "For sure, I’d love to see what you’ve done!"//-1
                    , "That’s really impressive. You must really know your angles."//+2
                );
                break;
            case 5:
                TextChange("Colonial Chad is getting antsy, flexing furiously. 'Well, I need to get back to working out soon, bro. So answer me this: How do I know people moving in aren’t going to try to renovate me? I don’t do artificial supplements, buddy.' He’s acting nonchalant, but he sounds uncomfortable asking."
                    , "To be honest? You’re gonna be so happy, you won’t even notice."//-1
                    , "That’s something you’ll work out with whoever moves in. But don’t worry, we’ll find you a great match."//+0
                    , "We’ll match you with someone who appreciates you, man. You don’t have to worry about a thing."//+1
                    , "There’s nothing to renovate. And if there ever is, the home association won’t let them build additions that stand out, so you’ll always look au naturale."//+2
                );
                break;
            case 6:
                TextChange("Colonial Chad darts his eyes between you. 'Okay, you two got your time, bros.' He stretches and takes a big breath. 'I’ve made up my mind. I want to go with…'"
                    , ""
                    , ""
                    , ""
                    , "next" //+0 ending card
                );
                break;
            case 7:
                if(confirm("are you positive you want to restart?"))
                location.reload();
                break;
        }
    } //chad dialog
    else if (character === 2) {
        switch (nextDialog) {
            case 1:
                TextChange("Hey, what’s up? Is there a reason you pulled me away from my friends? I don’t think I know you... Look, I have clubs soon, so I hope this is quick. If clubs start late again, I’m never gonna hear the end of it. I’m too busy to deal with that. Do you know how many calls I--"
                    , "I’m sure Stacy Halls can get away with being late."//-1
                    , "It’ll be quick!"//0
                    , "If clubs start late, you can blame me."//1
                    , "This is big news about your future, Stacy Halls."//2
                );
                break;
            case 2:
                TextChange("*Suddenly, Stacy Halls slaps her thigh*</br> Oh, duh! This is about the whole redistricting thing, isn’t it? Let me guess, you’re offering to remodel me... Look, the superintendent told me I have nothing to worry about. As long as I have the best football field-- and I do-- they're not going to shut me down. I don’t need your help."
                    , "No one’s worried about your football field! But your boiler room is seriously out of code. We’re just trying to get you right."//-1
                    , "Everyone could use some help looking their best. We just want to show you in the best light possible!"//0
                    , "You say that, but we know you’ve been eyeing those new cheerleading outfits..."//1
                    , "We’re not trying to fix up your school, we’re trying to optimize your curriculum."//2
                );
                break;
            case 3:
                TextChange("“I mean...” Stacy Halls tilts her head from side to side. “I’m ready to grow up from being a public high school. Or at least mix it up—been looking at vocational schools.” She taps her foot.</br> “And ?” You ask, since she clearly wants you to ask.</br>She grins.“I do love swimming.And a pool would REALLY appeal to anyone looking for a Division III swim team...” "
                    , " Sure. We can replace the band room with a pool, no sweat. "//-1
                    , "What kind of pool? "//+2
                    , "I don’t want to promise you a pool when I don’t know if I can deliver. But I’ll try."//0
                    , "Honestly, I'm surprised you don’t already have one. Just a warning, it’ll take a while to add that to the school. "//+1
                );
                break;
            case 4:
                TextChange("Oh, um...” Stacy Halls suddenly loses her assertive edge.“So...I do have one mandatory, must - have condition.” </br>“Which is ?” You ask.</br>She reaches around to the back of her waist and brings out boxing gloves that, apparently, had been hanging there.While putting them on, she says, “I know our boxing program isn’t great, and everyone’s pushing football, but...” She swings her stubby arms, a one - two jab combo.“I love boxing.I’m not giving it up just so the football team can afford a season’s worth of baby powder.”"
                    , "I didn’t know you boxed! That’s cool! Yeah, we’ll keep it."//0
                    , "That’s some solid form you have there. The boxing team must be teaching well, definitely worth keeping around."//+2
                    , "We’re only looking to build on programs, not take any down. You got lucky with the redistricting!"//+1
                    , "Don’t worry, the boxing team isn’t on anyone’s radar. You’re definitely safe."//-1
                );
                break;
            case 5:
                TextChange("“So...” Stacy Halls clasps her hands behind her back. “Look, I don’t love everything about myself-- I wake up to a ringing in my ears every day at 8:00am, and the bell lasts too long-- anyway, but I like a lot about myself. I don’t want to be part of some state-of-the-art program if it means losing my personality. How do I know you care about the real me?” She asks earnestly. "
                    , "I don’t know the real you, yet. But we’ll talk, and we’ll work together, to find the best solutions we can for you."//+1
                    , "We have good funding from this redistricting. We have the resources to do whatever you want."// - 1
                    , "You don’t. But I intend to prove myself."//0
                    , "I’ve done my research. Strong football team, underrated boxing, working on your curriculum. We can work on all of that."//2
                );
                break;
            case 6:
                TextChange("Stacy Halls looks down, and then up, then back down bashfully. “You two have been talking to me for a while now, I gotta go soon,” she mumbles. “I guess I should, like, let you know who I’m going with.” She stands upright, takes a breath, and says, “So I want...”"
                    , ""
                    , ""
                    , ""
                    , "next"
                );
                break;
            case 7:
                if (confirm("are you positive you want to restart?"))
                    location.reload();
                break;
        }
    } //stacy dialog
}



//---------Points Function
var selection = 0;
function PointsFunction(question) {
    if (character === 1) {//chad points
        switch (question) {
            case 1:
                DialogSelected(1, 0);
                DialogSelected(2, -1); //points for question 1
                DialogSelected(3, 0); //Response 1
                DialogSelected(4, -1); // question 2 et cetera
                DialogSelected(5, 0);
                DialogSelected(6, 2);//3
                DialogSelected(7, 0);
                DialogSelected(8, 0);//4
                DialogSelected(9, 0);
                DialogSelected(10, -1);//5
                DialogSelected(11, 0);
                DialogSelected(12, 0);//6
                break;
            case 2:
                DialogSelected(1, 0);
                DialogSelected(2, 0);//1
                DialogSelected(3, 0);
                DialogSelected(4, 0);//2
                DialogSelected(5, 0);
                DialogSelected(6, 0);//3
                DialogSelected(7, 0);
                DialogSelected(8, 1);//4
                DialogSelected(9, 0);
                DialogSelected(10, 0);//5
                DialogSelected(11, 0);
                DialogSelected(12, 0);//6

                break;
            case 3:
                DialogSelected(1, 0);
                DialogSelected(2, 1);//1
                DialogSelected(3, 0);
                DialogSelected(4, 1);//2
                DialogSelected(5, 0);
                DialogSelected(6, -1);//3
                DialogSelected(7, 0);
                DialogSelected(8, -1);//4
                DialogSelected(9, 0);
                DialogSelected(10, 1);//5
                DialogSelected(11, 0);
                DialogSelected(12, 0);//6

                break;
            case 4:
                DialogSelected(1, 0);
                DialogSelected(2, 2);//1
                DialogSelected(3, 0);
                DialogSelected(4, 2);//2
                DialogSelected(5, 0);
                DialogSelected(6, 1);//3
                DialogSelected(7, 0);
                DialogSelected(8, 2);//4
                DialogSelected(9, 0);
                DialogSelected(10, 2);//5
                DialogSelected(11, 0);
                DialogSelected(12, 0);//6

                break;

        }
    }
    else if (character === 2) {//stacy points
        switch (question) {
            case 1:
                DialogSelected(1, 0);
                DialogSelected(2, -1); //points for question 1
                DialogSelected(3, 0); //Response 1
                DialogSelected(4, -1); // question 2 et cetera
                DialogSelected(5, 0);
                DialogSelected(6, -1);//3
                DialogSelected(7, 0);
                DialogSelected(8, 0);//4
                DialogSelected(9, 0);
                DialogSelected(10, 1);//5
                DialogSelected(11, 0);
                DialogSelected(12, 0);//6
                break;
            case 2:
                DialogSelected(1, 0);
                DialogSelected(2, 0);//1
                DialogSelected(3, 0);
                DialogSelected(4, 0);//2
                DialogSelected(5, 0);
                DialogSelected(6, 2);//3
                DialogSelected(7, 0);
                DialogSelected(8, 2);//4
                DialogSelected(9, 0);
                DialogSelected(10, -1);//5
                DialogSelected(11, 0);
                DialogSelected(12, 0);//6

                break;
            case 3:
                DialogSelected(1, 0);
                DialogSelected(2, 1);//1
                DialogSelected(3, 0);
                DialogSelected(4, 1);//2
                DialogSelected(5, 0);
                DialogSelected(6, 0);//3
                DialogSelected(7, 0);
                DialogSelected(8, 1);//4
                DialogSelected(9, 0);
                DialogSelected(10, 2);//5
                DialogSelected(11, 0);
                DialogSelected(12, 0);//6

                break;
            case 4:
                DialogSelected(1, 0);
                DialogSelected(2, 2);//1
                DialogSelected(3, 0);
                DialogSelected(4, 2);//2
                DialogSelected(5, 0);
                DialogSelected(6, 1);//3
                DialogSelected(7, 0);
                DialogSelected(8, -1);//4
                DialogSelected(9, 0);
                DialogSelected(10, 2);//5
                DialogSelected(11, 0);
                DialogSelected(12, 0);//6

                break;

        }
    }
} //assigning points to questions
var dialogNum, givenPoints;
function DialogSelected(dialogNum,givenPoints) {
    if (clicks === dialogNum) {
        PointGiver(givenPoints);
    }

}



//---------Responses
var responseOne,responseTwo,ResponseThree,ResponseFour;

function Response(response) {
            TextChange(response, "", "", "", "Next");
}
function ChangingResponse(selection,ResponseOne,ResponseTwo,ResponseThree,ResponseFour) {
    switch (selection) {
        case 1:
            Response(ResponseOne);
            break;
        case 2:
            Response(ResponseTwo);
            break;
        case 3:
            Response(ResponseThree);
            break;
        case 4:
            Response(ResponseFour);
            break;
    }

}



//---------Reaction images
var angryChad, happyChad, sadChad, snapChad, thumbChad,defaultChad;
var angryStacy, blushingStacy, heartsStacy, sickStacy,defaultStacy;

//chad pic variables
angryChad = "BuffHouse_Angry.png";
happyChad = "BuffHouse_Happy.png";
snapChad = "BuffHouse_Snap.png";
thumbChad = "BuffHouse_ThumbsUp.png";
sadChad = "BuffHouse_Sad.png";
defaultChad = "BuffHouse_Default.png";
//stacy pic variables
angryStacy = "SchoolGirl_Angry.png";
blushingStacy = "SchoolGirl_Blushing.png";
heartsStacy = "SchoolGirl_Hearts.png";
sickStacy = "SchoolGirl_Sick.png";
defaultStacy = "SchoolGirl_Default.png";

var reactionOne, reactionTwo, reactionThree, reactionFour;
function ReactionImage(selection,reactionOne, reactionTwo, reactionThree, reactionFour) {
    var x = document.getElementById("characterPicture");
    switch (selection) {
        case 1:
            x.src = reactionOne;
            break;
        case 2:
            x.src = reactionTwo;
            break;
        case 3:
            x.src = reactionThree;
            break;
        case 4:
            x.src = reactionFour;
            break;

    }
}

//---------Win Screen
var winner = 0;
function Winner() {
    if (character === 2) {
        if (oneScore > twoScore) {
            winner = "“Player One! Take me away!”</br>“Sorry, Player Two, ” she says, “but I’ll Halls pass.”</br>Player One WINS!";
        }
        else if (oneScore < twoScore) {
            winner = "“Player Two! Take me away!”</br>“Sorry, Player One, ” she says, “but I’ll Halls pass.”</br>Player Two WINS!";
        }
        else if (oneScore === twoScore) {
            winner = "“Bart! I know your boss can take care of me!”</br>Bart suddenly appears from behind you.“I’ve got the professional care you need, honey.” He turns to you both and adds, “Don’t have a house, man!”</br> “Sorry, boys, ” Stacy Halls calls over her shoulder as Bart leads her away, “you just didn’t stand out from each other, like, at all.How boring; I’ll Halls pass.”</br>IT’S A TIE! SO YOU BOTH LOSE.";
        }
    }
    else if (character === 1) {
        if (oneScore > twoScore) {
            winner = " “Player One! I’m all yours, broseph!”</br>“Sorry, Player Two, ” he mumbles, “but you just weren’t fam, you know ?”</br> Player One WINS!";
        }
        else if (oneScore < twoScore) {
            winner = " “Player Two! I’m all yours, broseph!”</br>“Sorry, Player One, ” he mumbles, “but you just weren’t fam, you know ?”</br>Player Two WINS!";
        }
        else if (oneScore === twoScore) {
            winner = "“Bart! I know your boss can take care of me!”</br> Bart suddenly appears from behind you.“I’ve got the professional care you need, broseph.” He turns to you both and adds, “Don’t have a house, man!”</br>“Sorry, boys, ” Colonial Chad calls over his shoulder as Bart leads him away, “you just didn’t stand out from each other, like, at all.But Bart here…”</br>IT’S A TIE! SO YOU BOTH LOSE!.";
        }
    }

        TextChange(winner,"","","","Play Again?");
        var x = document.getElementById("characterPicture");
        if (character === 1) {
            x.src = "BuffHouse_Detailed.png";
            if (oneScore === twoScore) {
                x.src = "SkyScraperBart.png";
            }
        }
        else if (character === 2) {
            x.src = "SchoolGirl_Detailed.png";
            if (oneScore === twoScore) {
                x.src = "SkyScraperBart.png";
            }
    }

    document.getElementById("audio").src = "drum.ogg";

}