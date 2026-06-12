#!/usr/bin/env bash
# 帮助中心图片替换工具
# 用法: ./replace-image.sh <源图片路径> <目标图片路径>

set -e

SRC="$1"
DST="$2"

if [ -z "$SRC" ] || [ -z "$DST" ]; then
    echo "用法: ./replace-image.sh <源图片路径> <目标图片路径>"
    echo ""
    echo "示例:"
    echo "  ./replace-image.sh ~/Downloads/new-image.png ./zh-CN/kimi-business/images/faq/enterprise-payment.png"
    exit 1
fi

if [ ! -f "$SRC" ]; then
    echo "❌ 源文件不存在: $SRC"
    exit 1
fi

# 获取文件信息
SRC_SIZE=$(stat -f%z "$SRC" 2>/dev/null || stat -c%s "$SRC" 2>/dev/null)
SRC_TYPE=$(file -b "$SRC" | cut -d',' -f1)

echo "📷 源图片: $SRC"
echo "   大小: $SRC_SIZE bytes"
echo "   类型: $SRC_TYPE"
echo ""
echo "🎯 目标: $DST"

if [ -f "$DST" ]; then
    DST_SIZE=$(stat -f%z "$DST" 2>/dev/null || stat -c%s "$DST" 2>/dev/null)
    DST_TYPE=$(file -b "$DST" | cut -d',' -f1)
    echo "   当前大小: $DST_SIZE bytes"
    echo "   当前类型: $DST_TYPE"
    echo ""
fi

read -p "确认替换? (y/n) " CONFIRM
if [ "$CONFIRM" != "y" ]; then
    echo "已取消"
    exit 0
fi

cp "$SRC" "$DST"

echo "✅ 替换完成!"
echo ""

# 显示新文件信息
NEW_SIZE=$(stat -f%z "$DST" 2>/dev/null || stat -c%s "$DST" 2>/dev/null)
NEW_TYPE=$(file -b "$DST" | cut -d',' -f1)
echo "新文件信息:"
echo "   大小: $NEW_SIZE bytes"
echo "   类型: $NEW_TYPE"

# 如果目录是 git 仓库，提示 git 操作
if [ -d "$(dirname "$DST")/.git" ] || git rev-parse --git-dir >/dev/null 2>&1; then
    echo ""
    echo "💡 Git 提示:"
    echo "   git add \"$DST\""
    echo "   git commit -m \"fix: 替换图片 $(basename $DST)\""
    echo "   git push origin master"
fi
