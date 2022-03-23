import React from 'react';
import "./Message.styles.scss"
/*
Развернуть новый проект с использованием create-react-app.+
2. Создать компонент Message, отображающий переданный ему пропсом текст. + 
3. Изменить компонент App так, чтобы тот рендерил Message и передавал ему пропсом текст + 
(константу).
4. Стилизовать компоненты через css (при желании можно использовать less или sass, однако
для sass нужно дополнительно установить node-sass: документация CRA).
5. Установить расширение React Devtools
*/



export default function Message({ text, messageTo }) {

    return (
        <div className={"message" + (!messageTo ? " message-from" : " message-to")}>
            <p> {text}</p>
        </div>
    );
}