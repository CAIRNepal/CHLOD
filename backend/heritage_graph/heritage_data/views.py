from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import TokenError
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import Submission, Moderation
from .serializers import SubmissionSerializer, ModerationSerializer

# Contributor view: Submit data
class SubmissionCreateView(generics.CreateAPIView):
    queryset = Submission.objects.all()
    serializer_class = SubmissionSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(contributor=self.request.user)

# Public view: List all submissions (pending and reviewed)
class SubmissionListView(generics.ListAPIView):
    queryset = Submission.objects.all()
    serializer_class = SubmissionSerializer

# Moderator view: Review a submission
class ModerationReviewView(generics.UpdateAPIView):
    queryset = Moderation.objects.all()
    serializer_class = ModerationSerializer
    permission_classes = [IsAdminUser]

    def update(self, request, *args, **kwargs):
        moderation = self.get_object()
        submission = moderation.submission
        data = request.data

        # Update moderation details
        moderation.moderator = request.user
        moderation.comment = data.get('comment', '')
        moderation.save()

        # Update submission status
        submission.status = data.get('status', submission.status)
        submission.save()

        return Response({
            "submission": SubmissionSerializer(submission).data,
            "moderation": ModerationSerializer(moderation).data
        })








class LogoutView(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_200_OK)
        except (ObjectDoesNotExist, TokenError):
            return Response(status=status.HTTP_400_BAD_REQUEST)
        

