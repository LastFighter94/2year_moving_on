<template>
    <div class="container content md-mg-b-10 create-message-div">
        <span class="page-title md-mg-b-30">Создать рассылку</span>

        <div class="message-theme-div">
            <div>
                <span class="md-mg-b-10 md-d-block ">Тема:</span>
                <div class="input-div md-mg-b-40">
                    <input class="input-text" type="text" placeholder="Введите тему рассылки">
                </div>
            </div>

            <div>
                <span class="md-mg-b-10 md-d-block">Кому:</span>
                <div class="input-div md-mg-b-40">
                    <input type="text" placeholder="@Всем или введите адрес почты">
                </div>
            </div>
        </div>

        <span class="md-mg-b-10 md-d-block">Текст сообщения:</span>

        <div class="card md-p-20 md-mg-b-10">
            <textarea placeholder="Введите текст сообщения" class="msg-textarea" name="" id="" cols="30" rows="10"></textarea>

            <div class="md-d-flex w-100p">
                <span style="margin-left: auto">
                    <img src="@/assets/svg/attachment-plus.svg" alt="">
                    <img src="@/assets/svg/link.svg" alt="">
                </span>
            </div>
        </div>

        <button style="margin-left: auto" class="action-card-btn dark-bg">Отправить</button>
    </div>
</template>

<script>
export default {
  name: 'adminPanelMessages'
}
</script>

<style scoped>
.create-message-div {
    color: var(--color-dark);
    display: flex;
    flex-direction: column;
}

.message-theme-div {
    display: flex;
    gap: 20px;
    width: 100%;
    padding-right: 10px;
}

.msg-textarea {
    width: 100%;
    height: 150px;
    border: 0;
    resize: none;
}

.msg-textarea:active,
.msg-textarea:focus {
    outline: none;
}

.message-theme-div input {
    min-width: 400px;
}

@media (max-width: 900px){
    .message-theme-div {
        flex-direction: column;
        gap: 0;
    }
}

@media (max-width: 500px){
    .message-theme-div input {
        min-width: max-content;
    }
}

</style>
