
export const SelectQuery = {
    allUsers : `SELECT * FROM Users`,
    usersCount: `SELECT COUNT(*) usersCount FROM Users`
}

exports.module = SelectQuery;