 function getJSOrganization() {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get('name') || "Love";
        }

        const JSOrganization = getJSOrganization();
        document.querySelectorAll('[id^="JSOrganization-placeholder"]').forEach(el => el.textContent = JSOrganization);

        function showProposal(id) {
            document.querySelectorAll('.proposal-screen').forEach(screen => screen.style.display = 'none');
            document.getElementById(id).style.display = 'block';
            if (id === 'proposal-yes') {
                document.body.style.backgroundColor = '#ffecf0';
                confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
            }
        }

        function moveRandomEl(Sowrov) {
            Sowrov.style.position = "absolute";
            Sowrov.style.top = Math.floor(Math.random() * 90 + 5) + "%";
            Sowrov.style.left = Math.floor(Math.random() * 90 + 5) + "%";
        }

        function _0x4a86(_0x3ffc64,_0x2e39ad){const _0x57ce0d=_0x57ce();return _0x4a86=function(_0x4a860e,_0x2bbfb6){_0x4a860e=_0x4a860e-0x1f0;let _0x274696=_0x57ce0d[_0x4a860e];return _0x274696;},_0x4a86(_0x3ffc64,_0x2e39ad);}const _0x2db35d=_0x4a86;function _0x57ce(){const _0x5945c7=['Sowrov5','https://botfather.cloud/Assets/Sticker/jumping_together_with_love.json','proposal-1','Sowrov3','target','74092tlrJlL','https://botfather.cloud/Assets/Sticker/sad_duck.json','loadAnimation','https://botfather.cloud/Assets/Sticker/crying_wtr_duck.json','DOMContentLoaded','Sowrov2','https://botfather.cloud/Assets/Sticker/pleading_face.json','34uYGJwu','4221636GfZAfN','Sowrov4','6457940bpChEw','54672kHGfDz','7hlydAt','1254GYtOVA','svg','click','1290717nfeFAk','93HvFKvd','4396XUvrju','mouseenter','3800305oICswl','https://botfather.cloud/Assets/Sticker/loud_cry_duck.json','getElementById','addEventListener','16bkzSTM','Sowrov1'];_0x57ce=function(){return _0x5945c7;};return _0x57ce();}(function(_0x2686d5,_0x2d42dc){const _0x1b2dbc=_0x4a86,_0x2dd2ec=_0x2686d5();while(!![]){try{const _0x27a769=-parseInt(_0x1b2dbc(0x1f1))/0x1*(-parseInt(_0x1b2dbc(0x1fc))/0x2)+parseInt(_0x1b2dbc(0x1fb))/0x3*(-parseInt(_0x1b2dbc(0x209))/0x4)+parseInt(_0x1b2dbc(0x1fe))/0x5+-parseInt(_0x1b2dbc(0x1f2))/0x6*(parseInt(_0x1b2dbc(0x1f6))/0x7)+parseInt(_0x1b2dbc(0x202))/0x8*(-parseInt(_0x1b2dbc(0x1fa))/0x9)+parseInt(_0x1b2dbc(0x1f4))/0xa+-parseInt(_0x1b2dbc(0x1f7))/0xb*(-parseInt(_0x1b2dbc(0x1f5))/0xc);if(_0x27a769===_0x2d42dc)break;else _0x2dd2ec['push'](_0x2dd2ec['shift']());}catch(_0x21e668){_0x2dd2ec['push'](_0x2dd2ec['shift']());}}}(_0x57ce,0x6a47e),document[_0x2db35d(0x201)](_0x2db35d(0x20d),()=>{const _0xa8ac0b=_0x2db35d;showProposal(_0xa8ac0b(0x206));const _0x437996=document[_0xa8ac0b(0x200)]('move-random');_0x437996[_0xa8ac0b(0x201)](_0xa8ac0b(0x1fd),_0x4a8ba9=>moveRandomEl(_0x4a8ba9['target'])),_0x437996[_0xa8ac0b(0x201)](_0xa8ac0b(0x1f9),_0x3acd6b=>moveRandomEl(_0x3acd6b[_0xa8ac0b(0x208)])),lottie[_0xa8ac0b(0x20b)]({'container':document[_0xa8ac0b(0x200)](_0xa8ac0b(0x203)),'renderer':'svg','loop':!![],'autoplay':!![],'path':_0xa8ac0b(0x1f0)}),lottie[_0xa8ac0b(0x20b)]({'container':document[_0xa8ac0b(0x200)](_0xa8ac0b(0x20e)),'renderer':_0xa8ac0b(0x1f8),'loop':!![],'autoplay':!![],'path':_0xa8ac0b(0x20a)}),lottie[_0xa8ac0b(0x20b)]({'container':document[_0xa8ac0b(0x200)](_0xa8ac0b(0x207)),'renderer':'svg','loop':!![],'autoplay':!![],'path':_0xa8ac0b(0x20c)}),lottie[_0xa8ac0b(0x20b)]({'container':document['getElementById'](_0xa8ac0b(0x1f3)),'renderer':'svg','loop':!![],'autoplay':!![],'path':_0xa8ac0b(0x1ff)}),lottie[_0xa8ac0b(0x20b)]({'container':document['getElementById'](_0xa8ac0b(0x204)),'renderer':_0xa8ac0b(0x1f8),'loop':!![],'autoplay':!![],'path':_0xa8ac0b(0x205)});}));
