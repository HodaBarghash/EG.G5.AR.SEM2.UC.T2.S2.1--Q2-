function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6pZQX26zAkj":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbw2Enj8V1lSFV0PSX0KQA2an8KVbEus1gFOzEH4ehk8kKcx-NZvdMbmeuvhBfGPRK-DJg/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

