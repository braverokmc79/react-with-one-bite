function checkMood(mood, goodCallback, badCallback) {
    if (mood === "good") {
        //기분이 좋을 때 하는 동작
        goodCallback();
    } else {
        //기분 안 좋을 때 하는 동작
        badCallback();
    }
}

function cry() {
    console.log("ACTION  :: CRY");
}

function sign() {
    console.log("ACTION  :: SIGN");
}

function dance() {
    console.log("ACTION  :: DANCE");
}


checkMood("good", sign, cry);

