export function goLink( url, router ) {
    if (/^javas/.test(url) || !url) return
    if (!/^http/.test(url)){
        router.push(url)
    }else{
        window.location.href = url
    }
}