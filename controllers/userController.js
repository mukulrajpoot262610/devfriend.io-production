export const getAllUser = (req, res) => {
    res.status(200).json({
        message: 'All Rooms',
        success: true,
    })
}