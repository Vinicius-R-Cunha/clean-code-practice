import emailSender from '../utils/emails';

async function approvePayment(paymentId) {
    await updatePayments(paymentId);
    await updateOrders(paymentId);
    return await send(paymentId);
}

async function updatePayments(paymentId) {
    const paymentData = { approvedAt: Date.now() }
    return await paymentsRepository.update(paymentId, paymentData);
}

async function updateOrders(paymentId) {
    const payment = await paymentsRepository.find(paymentId);
    const orderData = { status: 'approved' };
    return await ordersRepository.update(payment.orderId, orderData);
}

async function send(paymentId) {
    const payment = await paymentsRepository.find(paymentId);
    const order = await ordersRepository.find(payment.orderId);
    const user = await usersRepository.find(order.userId);
    return await emailSender.sendApprovedOrderEmail(user, order);
}