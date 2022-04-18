async function updateUser(userId, data) {
    await checkUser(userId);
    await userRepository.update(userId, data);
}

async function deleteUser(userId) {
    await checkUser(userId);
    await userRepository.delete(userId);
}

async function checkUser(userId) {
    const user = await userRepository.find(userId);
    if (!user) throw 'User not found';

    return;
}