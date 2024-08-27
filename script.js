function startQuiz() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
}

function submitQuiz() {
    const form = document.forms['quiz-form'];
    const skinTypeResult = document.getElementById('skin-type-result');
    const recommendation = document.getElementById('recommendation');
    
    // Example logic for determining skin type
    let skinType = '';
    let recommendationText = '';

    if (form.q1.value === 'dry' || form.q3.value === 'dryness') {
        skinType = 'Dry Skin';
        recommendationText = 'We recommend Cetaphil Moisturizing Cream for deep hydration.';
    } else if (form.q1.value === 'oily' || form.q3.value === 'oiliness') {
        skinType = 'Oily Skin';
        recommendationText = 'We recommend Cetaphil Oil Control Moisturizer to balance your skin.';
    } else if (form.q1.value === 'balanced') {
        skinType = 'Combination Skin';
        recommendationText = 'We recommend Cetaphil Daily Hydrating Lotion for balanced moisture.';
    } else if (form.q5.value === 'sensitive' || form.q3.value === 'sensitivity') {
        skinType = 'Sensitive Skin';
        recommendationText = 'We recommend Cetaphil Moisturizing Lotion to soothe and protect your skin.';
    } else {
        skinType = 'Normal Skin';
        recommendationText = 'We recommend Cetaphil Daily Facial Moisturizer for daily use.';
    }

    skinTypeResult.innerText = skinType;
    recommendation.innerText = recommendationText;

    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';
}

function startGame() {
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
}

function showRewards() {
    const rewardMessage = document.getElementById('reward-message');

    // Example logic for determining rewards
    rewardMessage.innerText = 'You have earned a free Cetaphil trial pack!';

    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('rewards-screen').style.display = 'block';
}
