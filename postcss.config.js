module.exports = {
    plugins:[
        require('autoprefixer')({
            browsers:[
                'last 20 versions',
                'IE 9',
                'IOS >=8'
            ]
        })
    ]
}