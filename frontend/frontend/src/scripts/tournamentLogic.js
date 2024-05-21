class Tournament
{
    tournamentInput = null;
    numberOfParticipants = 0;
    tournamentName = "";
    participants = [];
    currentParticipants = [];
    winnersPool = [];
    looserPool = [];
    currentPair = [];
    firstPlace = null;
	secondPlace = null
	thirdPlace = null;
    OnGameFinished = new CustomEvent("OnGameFinished");
    winnerBranch = true;
    gameForThirdPlace = false;
    StartTournament = () =>
    {
		document.getElementById("tournament-field").remove();
        document.addEventListener("OnGameFinished", this.StartMatch);
        gameType.tournament = true;
        this.currentParticipants = this.participants;
        this.StartMatch();
    }
    StopTournament = () =>{
        gameType.tournament = false;
        this.RefreshData();
    }

    RefreshData() {
        this.tournamentInput = null;
        this.numberOfParticipants = 0;
        this.tournamentName = "";
        this.participants = [];
        this.currentParticipants = [];
        this.currentPair = [];
        this.winner = "";
    }
    StartMatch = () =>
    {
        if(!this.IsValidState()) {
            this.StopTournament();
            return;
        }
        console.log("start match");
        PrepareData();
        createScene();
        UpdateVsPlayer();
        startPlaying = true;
    }

    IsValidState() {
        if (this.currentParticipants.length === 1) {
            gameType.tournament = false;
            this.winner = this.currentParticipants[0].playerName;
            let secondPlayer = this.currentPair[0].playerName === this.winner
                ? this.currentPair[1].playerName
                : this.currentPair[0].playerName;
            setResult(this.winner, 1, this.tournamentName);
            setResult(secondPlayer, 2, this.tournamentName);
            console.log(this.winner);
            return false;
        }
        this.currentPair[0] = this.currentParticipants[0];
        this.currentPair[1] = this.currentParticipants[1];
        let player1 = this.currentPair[0];
        let player2 = this.currentPair[1];
        //TODO add player names on screen
        console.log(player1.playerName + " vs " + player2.playerName);
        document.getElementById("playerNames").innerHTML = player1.playerName + "-" + player2.playerName;
        this.currentParticipants.splice(0, 2);
        return true;
    }
}

let tournament = new Tournament();

function StartTournament()
{
    setTimeout(() => {
    tournament.tournamentInput = document.getElementById("tournament");
    }, 1000);
}

function generateError(errorMessageContainer, errorMessageContent) {
    const errorMessage = document.createElement("p");
    errorMessage.id = "errorMessage";
    errorMessage.textContent = errorMessageContent;
    errorMessage.setAttribute("class", "row");
    errorMessage.style.color = "red";
    errorMessage.style.marginTop = "1rem";
    errorMessage.style.padding = "1rem";
    errorMessage.style.fontWeight = "bold";
    errorMessage.style.justifyContent = "center";
    errorMessage.style.border = "2px solid red";
    errorMessage.style.borderRadius = "0.375rem";
    errorMessage.style.letterSpacing = "2px";
    errorMessageContainer.appendChild(errorMessage);
}

function ReadInput() {

    var buttonExit = document.querySelector('.button_menu');
    buttonExit.onclick = function () {
        tournament.StopTournament();
    }
    
    
    let userInput = document.getElementById("userInput").value;
    const errorMessageContainer = document.getElementById("tournament");
    if(document.getElementById("errorMessage") !== null)
        document.getElementById("errorMessage").remove();
    if (userInput.trim() === "") {
        if (isEnglish) {
            generateError(errorMessageContainer, "Error: Input is empty");
        }
        else if (isRussian) {
            generateError(errorMessageContainer, "Ошибка: Ввод пуст");
        }
        else if (isUkrainian) {
            generateError(errorMessageContainer, "Помилка: Введення порожнє");
        }
        return;
    }
    if(tournament.numberOfParticipants === 0)
    {
        if (isEnglish) {
            document.getElementById("tournament-text").innerHTML = "Enter name of tournament:";
        }
        else if (isRussian) {
            document.getElementById("tournament-text").innerHTML = "Введите название турнира:";
        }
        else if (isUkrainian) {
            document.getElementById("tournament-text").innerHTML = "Введіть назву турніру:";
        }
        tournament.numberOfParticipants = userInput;
        document.getElementById("userInput").value = "";
        if(tournament.numberOfParticipants < 2)
        {
            if (isEnglish) {
                tournament.numberOfParticipants = 0;
                generateError(errorMessageContainer, "Error: Number of players must be at least 2");
            }
            else if (isRussian) {
                tournament.numberOfParticipants = 0;
                generateError(errorMessageContainer, "Ошибка: Количество игроков должно быть не менее 2");
            }
            else if (isUkrainian) {
                tournament.numberOfParticipants = 0;
                generateError(errorMessageContainer, "Помилка: Кількість гравців повинна бути не менше 2");
            }
        }
        if(!IsDigit(tournament.numberOfParticipants))
        {
            if (isEnglish) {
                tournament.numberOfParticipants = 0;
                generateError(errorMessageContainer, "Error: Input must be a number");
            }
            else if (isRussian) {
                tournament.numberOfParticipants = 0;
                generateError(errorMessageContainer, "Ошибка: Ввод должен быть числом");
            }
            else if (isUkrainian) {
                tournament.numberOfParticipants = 0;
                generateError(errorMessageContainer, "Помилка: Введення повинно бути числом");
            }
        }
        return;
    }
    
    if(tournament.tournamentName === "")
    {
        if (isEnglish) {
            document.getElementById("tournament-text").innerHTML = `Enter name of player:`;
        }
        else if (isRussian) {
            document.getElementById("tournament-text").innerHTML = `Введите имя игрока:`;
        }
        else if (isUkrainian) {
            document.getElementById("tournament-text").innerHTML = `Введіть ім'я гравця:`;
        }
        tournament.tournamentName = userInput;
        document.getElementById("userInput").value = "";
        return;
    }
    let player = new Player(userInput, tournament.participants.length);
    tournament.participants.push(player);
    console.log(tournament.participants);
    document.getElementById("userInput").value = "";
    if ((tournament.participants.length).toString() === tournament.numberOfParticipants.toString()) {
        const successMessage = document.createElement("p");
        successMessage.textContent = "Reached " + tournament.numberOfParticipants;
        successMessage.style.color = "green";
        errorMessageContainer.appendChild(successMessage);
        setTimeout(() => {
            if(document.getElementById("errorMessage") !== null) {
                document.getElementById("errorMessage").remove();
            }
        }, 2000);
        tournament.StartTournament();
    }
}

