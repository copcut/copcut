function UsernameExistsError() {}
UsernameExistsError.prototype = Object.create(Error.prototype);

function EmailExistsError() {}
EmailExistsError.prototype = Object.create(Error.prototype);

function UserNotFoundError() {}
UserNotFoundError.prototype = Object.create(Error.prototype);

export { UsernameExistsError, EmailExistsError, UserNotFoundError };