#!/bin/bash
echo "🧪 Opening Wordle Bot Tests in Browser..."
echo "📝 Click 'Run All Tests' to execute the test suite"
echo "✅ All tests should pass with the case sensitivity fix"
echo ""

# Open the test file in the default browser
if command -v open &> /dev/null; then
    # macOS
    open tests.html
elif command -v xdg-open &> /dev/null; then
    # Linux
    xdg-open tests.html
elif command -v start &> /dev/null; then
    # Windows
    start tests.html
else
    echo "Please open tests.html in your browser manually"
fi

echo "🎯 Expected results:"
echo "   ✅ Bot starts with correct number of words"
echo "   ✅ Bot resets properly"
echo "   ✅ Simulate guess works correctly"
echo "   ✅ ASSAY should be in word list"
echo "   ✅ ASSAY scenario - first guess ADIEU"
echo "   ✅ Knowledge update works correctly"
echo "   ✅ Word consistency check works"
echo "   ✅ Word filtering works step by step"
echo "   ✅ Detailed ASSAY analysis"
echo ""
echo "🎉 All tests should pass!" 