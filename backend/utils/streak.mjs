export function updateStreak(user){
    const today=new Date();

    if(!user.lastActiveDate){
        user.streakCount=1;
        user.lastActiveDate=today;
        return;
    }

    const lastActive=new Date(user.lastActiveDate);

    const todayDate=new Date(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate()
    );

    const lastActiveDate=new Date(
        lastActive.getUTCFullYear(),
        lastActive.getUTCMonth(),
        lastActive.getUTCDate()
    );

    const differenceInMs=todayDate-lastActiveDate;
    const differenceInDays=differenceInMs/(1000*60*60*24);

    if(differenceInDays===0){
        return;
    }

    if(differenceInDays===1){
        user.streakCount+=1;
        user.lastActiveDate=today;
        return;
    }
    user.streakCount=1;
    user.lastActiveDate=today;
}