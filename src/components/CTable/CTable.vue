<template>
    <div class="c-table-container"
      :class="{'c-table-container-responsive': responsive,
        'c-table-container-bordered': bordered}">
        <table class="c-table"
          :class="{'c-table-stript': stript}">
            <slot></slot>
        </table>
    </div>
</template>

<script>
    export default{
        name: 'c-table',
        props: {
            bordered: {
                type: Boolean,
                default: false
            },
            stript: {
                type: Boolean,
                default: false
            },
            responsive: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="less">
    .c-table-container-responsive{
        overflow-y: scroll;
        td,th{
            white-space: nowrap;
        }
    }
    .c-table-container{
        position: relative;
        width: 100%;
        .c-table{
            width: 100%;
            line-height: 40px;
            text-align: left;
            border-top: 1px solid #e6e6e6;
            border-collapse: collapse;
            td,th{
                border-bottom: 1px solid #e6e6e6;
                border-right: 1px solid #e6e6e6;
                padding: 0 8px;
                &:last-child{
                    border-right: 0;
                }
            }
            th{
                font-weight: 500;
                background-color: #f9f9f9;
                border-bottom: 1px solid #cecece;
            }
        }
        &-bordered{
            border-left: 1px solid #e6e6e6;
            border-right: 1px solid #e6e6e6;
            border-radius: 2px;
        }
    }
    .c-table-stript{
        tr{
            &:nth-child(even){
                background-color: #f9f9f9
            }
        }
    }
</style>

