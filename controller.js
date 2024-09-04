function getAnswer() 
{
    let i

    i = Math.floor(Math.random() * possibleAnswers.length)
    if (possibleAnswers[i] == givenAnswer)
        {
            getAnswer()
        }
    else 
    {
        givenAnswer = possibleAnswers[i];
        updateView()
    }
}