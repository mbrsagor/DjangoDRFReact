from .views import CustomerViewSet

from rest_framework.routers import SimpleRouter
router = SimpleRouter()

router.register('customers', CustomerViewSet)

urlpatterns = router.urls
