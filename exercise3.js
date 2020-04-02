var woolOwners = [
    {
        "master": 1
    },
    {
        "dame": 1
    },
    {
      "little boy": 1,
      "location": "down the lane"
    }
  ];
  
  
  var bags = haveYouAnyWool;

  var haveYouAnyWool = function() {
      for (var i = 0; i < woolOwners.length; i++) {
      var totalBags = totalBags + i;
      }
      return (i);
  };
  
  
  function baabaaBlackSheep() {
      console.log("BaaBaa BlackSheep have you any wool?");
      if (totalBags = 3) {
          console.log("yes sir, yes sir " + totalBags + " bags full");
    }
  }
  
  function oneForMy() {
      for (var i = 0; i < 2; i++) {
          people = Object.keys(woolOwners[i]);
          var person = people.toString();
          console.log("one for my " + person);
      }
  }
  
  baabaaBlackSheep();
  oneForMy();
  
    var littleBoy = Object.keys(woolOwners[2])[0];
    var theBoy = littleBoy;


    var location = Object.values(woolOwners[2])[1];
    var whereHeLives = location;
  console.log("one for the " + littleBoy + " that lives " + whereHeLives);

//   console.log("BaaBaa BlackSheep have you any wool?"+('\n')+"yes sir, yes sir 3 bags full"+('\n')+"one for my master"+('\n')+"one for my dame"+('\n')+"one for the little boy that lives down the lane");
