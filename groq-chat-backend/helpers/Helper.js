const helper = {};
helper.response = function (response, status_code, message, data) {
	//console.log('------SENDING RESPONSE------', data)
	//console.log('------RESPONSE MESSAGE', message)
	var ret = {
		code: status_code,
		message: message,
	};
	if (data) {
		Object.assign(ret, data);
	}
	return response.status(status_code).json(ret);
}

module.exports = helper;