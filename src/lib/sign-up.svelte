<script>
    import Form from "./form.svelte";
</script>

<div class="container">
    <div class="inner">
        <div class="subscription">
            <div class="pre-alpha-text">
                Be the first to remote differently.
                <div style={"font-weight: bold "}>
                    Join the Pre-Alpha
                </div>
            </div>
            <div class="form">
                <Form />
            </div>
        </div>
        <div class="images">
            <div class="signup" />
        </div>
    </div>
</div>

<style lang="scss">


    .signup{
        height: 100%;
        width: 100%;
        content: url("/signup.webp");
    }

    .form {
        width: 75%;
    }


    .pre-alpha-text {
        margin-top: 40px;
        font-size: 35px;
        margin-bottom: 40px;
    }
    
    .subscription {
        width: 50%;
        margin-right: 50px;
        padding: 30px 0px 30px 30px;
    }

    .images {
        // height: 255px;
        width: 60%;
        padding-right: 30px;
    }
    
    .inner {
        display: flex;
    }

    .container {
        width: 100%;
        @media screen and (max-width: $bp) {
            height: auto;
        }
        @media screen and (min-width: 1240px) {
            max-width: 1240px;
            padding: 0px;
            margin: 0px auto;
        }
        background: radial-gradient(102.54% 63.2% at 100% 0%, #1D2030 0%, rgba(29, 32, 48, 0.25) 71.95%);
        border-radius: 10px;
    }


</style>