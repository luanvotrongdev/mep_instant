function GameDevelopmentProcess ()
{
    var gameBuild = "GameBuild_WEWWANTTORELEASE"
    gameDevelopement()
    var willUpdateSDK = true;
    var willChangeAPIs = true;
    var willChangeOnAirDatas = true
    var willHaveEffectOnOlderGames = falsel;
    // if(willUpdateSDK) || willChangeAPIs || willChangeOnAirDatas
}

function gameDevelopement()
{
    var testResult;
    do
    {
        gameBuild = developGameFlow();
        testResult = testGameFlowOnSandbox(gameBuild)
    }
    while(testResult == "FAIL")
}