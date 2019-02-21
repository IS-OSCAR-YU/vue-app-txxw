<template>
    <div class="header">
        <h1 class="logo">
            <a href="">
                <img src="/img/header/new_logo.png" alt="">
            </a>
        </h1>
        <ul class="nav">
            <li v-for="(item, index) in navlist" :key="index">
                <a href="" :class="{active: item[1] === currentTab}">{{item[0]}}</a>
            </li>
        </ul>
        <div class="more">更多+</div>
        <div class="login">一键登录</div>
    </div>
</template>

<style lang="scss">
    $minColor: #3563d5;
    $secColor: #e3f3fe;
    * {
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
    }
    .header {
        position: fixed;
        z-index: 90;
        display: flex;
        align-items: center;
        width: 100%;
        height: 78px;
        border-bottom: 1px solid #ebebeb;
        box-shadow: 0 1px 2px hsla(0,0%,60%,.05);
        background: #fff;
        &::before {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            position: absolute;
            top: 0;
            left: 0;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAACCAIAAAA2H1bMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2ODc2OGFmMy1iYzQ2LWQ5NDMtOWRiNy0wZTlhOGMwZDdmN2YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mzc3NDQxNTY4NkUyMTFFNzhGNzRCM0ZDNUEwNzNDMDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mzc3NDQxNTU4NkUyMTFFNzhGNzRCM0ZDNUEwNzNDMDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZTI1MTM1ZTAtMDczZC03MTRiLTg0ZGMtNmU1NmUyN2I5YzUzIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTRlZTNkMzYtODBiYi0xMWU3LWFkYjQtY2I4MDYzMzA2NTE4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+TFzIowAABdFJREFUeNrsmQuS5CYMhvnp5BK5/xH2WnuCrFEM4qGXaffMJFtTaVftDm1jJISQ5A/89eNnel/v6ztdlBJG4+XrATPUB68/L3W7dWXumYPXsxkKwcgPK4jEI/nW+bdY2aDVbbz+h9WvaNUoLyldVgaJ6fRhW0+pG0l9ujKQY/YXMy9rbRNYCkZjKg7+Sd4CwNINY3xwHyzNoaWXbm1SxpdDBQsx101NE5dLXcy7+Jzn6Fknols35X3ZgW0l+5unZqjZH7izQ/3soNvyKbQRwp/Qna/iQCjlJYVfiUfLGvQZcW2c8BG5idwRpPr4JeM78//7DvaSN8Y9Px7zv+xCLKZOYrcCtHyPA2Ch5YSPyNFFY82iGx7W86F+Y8YW4wEIEorKLOVUz0TIaH+grlo523SGcxSijPWwwG18FjTC5hxzhsruUGOygZ6ogbeKzHo6ZoF1W+707mVIPn/Op/X/8x+Ujy8vwjAp7vkklCa7V6B9lVsIlOz7byoz3c+HNohn82XlXdTyJvU8l0c2qtoSpGN39x4ZEcvrMJx+xQm5lNRGFZMmudY+g5F+aq1NWFZIS7A2Y06rdKlt6llXboogXEq70bRQk2acs3C2F515y8xVKO3Huc2vpmkzadtHQpNC2kOxto6oDbr0PI2Q0SXvw9fK5jtvLEPrzFawWkmfGBUaVXPnB4rolY3ORtDZ/wwgcKk3TO3hel3E/YxIohzf95l3uNF0W7M7f2YUOa/q31jdpDfy/ZRUHGEbPi29aC3OreRonHOE0BXEOKqbzUU6QFECOdtSfzGJHS3jylU9Y+/LGcnX/bBt05aDHmeOo7rf14uzzapm0Q6F6mI6YxT2pS7BzKEtDEZ5u8jAc1GYzljRdFsbBCIgTE0o8uej7ZeDsjdOcjVrEQqz/tw+UpZZ+yBolx5fMdXQVVU5QiH4innuil8Ev0F4mhySaPgJz7r0kbsOD9DZOHUrzm2om8x+pp5zeTT5h45jZTXqgIf40CT74WQD4OE8VixKtcoxHs3kUchHsOSGBX9RcqNE2rKFZclX3MaRRdd8+ivhaKM8cjrK8+1vJrtXNW2C8u2nT6+/6Ytr780qvK//1YU3gH5f35lEf0sAvYqMICdSDgeEocy0Ef3Q1b2t4CG48DWA1tqRRq6UdblouG32uNwAcXgAnWYRiLCdJOZj/WkLoCWDVugc8KYmvTQ0Da4KbkSLaCnMRfbHTQxH2++1W7zvJW74KluUDNqTayDd4KdpC4jDD9gNxabbxPkLOKaZ8p7wOmRP7ZPpg0I/9qI/UVBMjtJ/fCH6Pv9dOkR4LkQmnlj6CGBmF6Nn5zz2QCWP1Q4TCrb0mV8v6zNsIVczlykPzGKof6TlFbUWAQSUlBD5Gbp3wZHr3xyFSkRWNq+bHe7pc44hBhtNPxLkwgslh5In+3UMeq6zRa5RSYBkDjUb/PUA3Rp2EOVOB7omnRQE4IFTX6XSKRkK3DnpigejtlCEKNcvdxgsbrYtNGHJYrYa2S7+NYJSTvp4gFN0uVj6BQMH+GtO2/CT2EFk1xpk8weMc1IHuRmRBftJRroE66GbTXYjoyscG2XQlazj9U2HXWWw4BHaKVFJufNTnQVzPVIKgohImVVcvsisnljtDyzZtTzD1X2GfUabG0TrLEEiOVPgTeJGF0zkKsHLV+iiaAitJGldHnQ+KPIE1GaQLQ/7Q7s9Pf1NUZIarLbu0LJUAgIwjX1xuTnwL9vDj7AckptrHO0IZUa8lczU3OcRmOKVEXMgoacuXYYjMXP3GF1JlI5xuDxexFEWRfl8MuiNe5OOD8Uy37V8ZXvuQu7U8NBFI5H8Jux9SNHqemx2CCQ9xXkSnfR5JwmFx5EVj69Ia3huYZg7xAGAcc4SfCa1bgXGLDPQnU51jM/bQ0BhE2mPXkR1KWXsXnlMZWD0U6o7WHYbOWLQsujyAFrJKpVEz/aGQR/XiPZK1XyNmz/DoN8A+n39S9c/AgwAdnPIpqG9RiYAAAAASUVORK5CYII=) top no-repeat #1ab4ed
        }
        .logo {
            width: 122px;
            height: 33px;
            margin-left: 30px;
            a {
                display: block;
                width: 100%;
                height: 100%;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .nav {
            height: 100%;
            margin-left: 15px;
            li {
                float: left;
                width: 36px;
                height: 100%;
                padding: 0 15px;
                text-align: center;
                line-height: 78px;
                font-size: 18px;
                a {
                    width: 100%;
                    height: 100%;
                    display: block;
                    border-bottom: 3px solid transparent;
                    color: #000;
                    text-decoration: none;
                    box-sizing: border-box;
                    &.active {
                        border-bottom: 3px solid $minColor;
                    }
                }
            }
        }
        .more {
            padding: 0 14px;
            background: $secColor;
            border-radius: 20px;
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            margin-left: 30px;
            color: $minColor;
        }
        .login {
            width: 75px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            background: $secColor;
            border-radius: 20px;
            font-size: 14px;
            position: absolute;
            right: 30px;
            color: $minColor;
        }
    }
</style>

<script>
export default {
    data() {
        return {
            navlist: [
                [ '要闻', 'news' ],
                [ '视频', 'video' ],
                [ '推荐', 'recomand' ],
                [ '北京', 'beijing' ],
                [ '娱乐', 'entertainment' ],
                [ '体育', 'sports' ], 
                [ '军事', 'junshi' ], 
                [ 'NBA', 'nba' ], 
                [ '国际', 'internation' ], 
                [ '科技', 'tec' ], 
                [ '财经', 'finance' ], 
                [ '汽车', 'moto' ]
            ],
            currentTab: 'news'
        }
    },
    watch: {
        $route() {
            /** 监听路由变化更新当前激活tab页 */
            this.currentTab = this.$route.path.slice(1, this.$route.path.length - 1);
        }
    }
}
</script>
