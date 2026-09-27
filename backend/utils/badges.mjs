const BADGE_THRESHOLDS=[
    {count:1,name:'Beginner Citizen'},
    {count:3,name:'Constitution Explorer'},
    {count:6,name:'Civic Scholar'}
];

export function updateBadges(user,completedCount){
    const earnedBadges=BADGE_THRESHOLDS.filter(
        badge=>completedCount>=badge.count
    );

    for(const badge of earnedBadges){
        if(!user.badges.includes(badge.name)){
            user.badges.push(badge.name);
        }
    }
}