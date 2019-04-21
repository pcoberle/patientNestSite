var config = {
    apiKey: "AIzaSyBegNBwa5l_m5PmyNe6wfSgR8ypMuZs1iw",
    authDomain: "patient-nest-d01de.firebaseapp.com",
    databaseURL: "https://patient-nest-d01de.firebaseio.com",
    projectId: "patient-nest-d01de",
    storageBucket: "patient-nest-d01de.appspot.com",
    messagingSenderId: "44207626886"
  };
  firebase.initializeApp(config);

  var firestore = firebase.firestore();

const docRef = firestore.doc("users/5klwUaUAiMhp6RNIsCJTBnltnf62/medication/KACXTy4z2L9YU4ysZjcl");
const inputTextField = document.querySelector("#changeName");
const inputTextField2 = document.querySelector("#lastDosageDate");
const inputTextField3 = document.querySelector("#lastDosageTime");
const saveButton = document.querySelector("#saveButton");


saveButton.addEventListener("click", function(){
    const textToSave = inputTextField.value;
    const textToSave2 = inputTextField2.value;
    const textToSave3 = inputTextField3.value;
    console.log("I am going to have " + textToSave + ", " +textToSave2 + ", "+ textToSave3 + " to Firestore");
    docRef.update({
        nurse: textToSave,
        lastDosageDate: textToSave2,
        lastDosageTime: textToSave3
    }).then(function() {
        console.log("Status saved");
    }).catch(function (error){
        console.log("Get an error: ", error);
    }
   );

})
