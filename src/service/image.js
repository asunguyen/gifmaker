export default {
    download: (url, type) => {
        function urltoFile(url, filename, mimeType) {
            mimeType = mimeType || (url.match(/^data:([^;]+);/) || '')[1]
            return (fetch(url)
                .then(function (res) { return res.arrayBuffer() })
                .then(function (buf) { return new File([buf], filename, { type: mimeType }) })
            )
        }
        urltoFile(url, `image.${type}`)
            .then(function (file) {
                let fr = new FileReader()
                fr.readAsDataURL(file)
                var blob = new Blob([file], { type: `image/${type}` })
                var objectURL = window.URL.createObjectURL(blob)
                if (navigator.appVersion.toString().indexOf('.NET') > 0) {
                    window.navigator.msSaveOrOpenBlob(blob, `image.${type}`)
                } else {
                    var link = document.createElement('a')
                    link.href = objectURL
                    link.download = `image.${type}`
                    document.body.appendChild(link)
                    link.click()
                    link.remove()
                }
            })
    },
    resize: (src, type, new_width, new_height) => {
        let img = document.createElement('img')
        img.src = src
        let canvas = document.createElement('canvas')
        canvas.width = new_width
        canvas.height = new_height
        let ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, new_width, new_height)
        let image = canvas.toDataURL(`image/${type}`)
        return image
    }
}