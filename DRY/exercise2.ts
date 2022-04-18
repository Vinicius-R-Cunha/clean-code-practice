async function createUser(userData) {
    validateNameCpf(userData);
    await userRepository.create(userData);
}

async function updateUser(userId, userData) {
    validateNameCpf(userData);
    await userRepository.update(userId, userData);
}

function validateNameCpf(userData) {
    const { name, cpf } = userData;

    if (name.length === 0 || cpf.length !== 14) {
        return false;
    }

    return;
}