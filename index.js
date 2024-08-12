$(document).ready(function() {

    if(!localStorage.getItem('searchPref')){
        localStorage.setItem('searchPref', 'exact')
        $('input[type="radio"][value="exact"]').prop('checked', true)
    }

    let helperDiv = $('<div>').attr('style', `
        margin-left: 8px;
        padding: 10px; 
        border: 1px solid black; 
        background: #FFD123; 
        position: fixed; 
        left: 0px; 
        top: 120px; 
        z-index: 10000;
        text-align: left;
        font-family: MuseoSansRounded500, Arial, sans-serif;
        user-select: none;
        font-size: 16px;
        `)
    let switchDiv = $('<div>').html(`
        <div style="position:relative; float:left; cursor:pointer;" onClick="toggleSSW()">
            super shop wizard
        </div>
        <div style="position:relative; float:left; cursor:pointer; right:-5px; top:1px;" onClick="toggleSettings()">
            <img style="width:16px;" src="https://imgur.com/Ot3roHO.png">
        </div>
        <br>
        <div id="ssw-toggle-settings" style="display:none; font-size:14px; margin-top:8px;">search default:
            <div>
                <label><input type="radio" name="searchOpt" value="containing">containing</label>
            </div>
            <div>
                <label><input type="radio" name="searchOpt" value="exact">identical</label>
            </div>
        </div>
        <script>
            $('input[name="searchOpt"]').on('change', function() {
                localStorage.setItem('searchPref', $(this).val())
                $('#ssw-criteria').val(localStorage.getItem('searchPref'))
            })
            let toggleSSW = () => {
                if(typeof toggleSSW__2020 != 'undefined'){
                    toggleSSW__2020()
                }
                $('.sswdrop').removeClass('panel_hidden')
                $('.sswdrop').addClass('panel_shown')
                $('.sswdrop').attr('style', 'bottom:20px;')
                $('#ssw-criteria').val(localStorage.getItem('searchPref'))
                $('#searchstr').focus()
            }
            let toggleSettings = () => {
                $('#ssw-toggle-settings').slideToggle()
                
                let searchPref = localStorage.getItem('searchPref')

                if(searchPref == 'exact'){
                    $('input[type="radio"][value="exact"]').prop('checked', true)
                }
                if(searchPref == 'containing'){
                    $('input[type="radio"][value="containing"]').prop('checked', true)
                }
            }
        </script>
        `)

    helperDiv.append(switchDiv)
    $('body').prepend(helperDiv)
})