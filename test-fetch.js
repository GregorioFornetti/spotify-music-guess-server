
document.addEventListener('DOMContentLoaded', async () => {
    const token = await fetch('/auth-without-login').then((res) => (res.text()))
    console.log(token)
    const playlistId = '0hVRGvYzW2VzbLm3ddXqIA'
    const country = 'br'
    
    const comecarBtn = document.getElementById('comecar')
    comecarBtn.addEventListener('click', () => {
        fetch(`https://api.spotify.com/v1/playlists/${playlistId}?market=${country}&additional_types=episode`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(async (data) => {

            var audio = document.createElement('audio')
            audio.style.display = 'none'

            var source = document.createElement('source')
            source.type = 'audio/mpeg'
            source.src = data.tracks.items[0].track.preview_url
            audio.appendChild(source)

            document.body.appendChild(audio)

            audio.play()

            setTimeout(() => {

                audio.pause()

                document.body.innerHTML = ''
                audio = document.createElement('audio')
                audio.style.display = 'none'

                source = document.createElement('source')
                source.type = 'audio/mpeg'
                source.src = data.tracks.items[1].track.preview_url
                audio.appendChild(source)

                document.body.appendChild(audio)

                audio.play()

                setTimeout(() => {
                    audio.pause()
                }, 5000)
            }, 5000)
        })
    })
})